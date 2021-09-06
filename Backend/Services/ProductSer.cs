using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Purch_Managment.DAL;
using Purch_Managment.Handlers;
using Purch_Managment.Interfaces;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Purch_Managment.Services
{
    public class ProductSer: ProductInterface
    {
        private readonly Import_CompanyContext _context;
        private readonly ErrorHandler _controller;
        private ProductHandler _handler;
        public ProductSer(Import_CompanyContext context, ErrorHandler controller, ProductHandler handler)
        {
            _context = context;
            _controller = controller;
            _handler = handler;
        }


        //Get All Products
        public async Task<List<ProductModel>> GetAllProducts()
        {
            var products = await _context.Products.Select(x => _handler.ProductHandlerToModel(x)).ToListAsync(); 
            return products;

        }

        //Get Product By ID
        public async Task<ActionResult<ProductModel>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return _controller.NotFound();
            }


            return _handler.ProductHandlerToModel(product);
        }


        //Add Product to the Database
        public async Task<IActionResult> AddProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
            return _controller.CreatedAtAction(nameof(GetProduct), new { id = product.ProdId }, _handler.ProductHandlerToModel(product));
        }

        //Delete Product by ID
        public async Task<IActionResult> DeleteProduct(int id)
        {
            try
            {
                var product = await _context.Products.FindAsync(id);
                _context.Entry(product).State = EntityState.Deleted;
                _context.SaveChanges();
                return _controller.StatusCode(200);
            }
            catch (Exception ex)
            {
                return _controller.NotFound();

            }
        }

        //Edit Product Name
        public async Task<IActionResult> EditProduct(Product product)
        {
            try
            {
                _context.Entry(product).State = EntityState.Modified;
                _context.SaveChanges();
                return _controller.StatusCode(200);
            }
            catch (Exception ex)
            {
                return _controller.NotFound();

            }
        }
    }
}
