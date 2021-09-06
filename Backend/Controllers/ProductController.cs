using Microsoft.AspNetCore.Mvc;
using Purch_Managment.DAL;
using Purch_Managment.Models;
using Purch_Managment.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController
    {
        private readonly ProductSer _productSer;
        public ProductController(ProductSer productSer)
        {
            _productSer = productSer;
        }
        // post: api/Product
        //Get All Products
        [HttpGet()]
        public Task<List<ProductModel>> GetAlProducts()
        {
            return _productSer.GetAllProducts();
        }

        //Get Product By ID
        [HttpGet("{id}")]
        public Task<ActionResult<ProductModel>> GetProduct(int id)
        {
            return _productSer.GetProduct(id);
        }

        [HttpPost()]
        //Add Product to the Database
        public Task<IActionResult> AddCurrency(Product product)
        {
            return _productSer.AddProduct(product);
        }

        //Delete Product by ID
        [HttpDelete("{id}")]
        public Task<IActionResult> DeleteCurrency(int id)
        {
            return _productSer.DeleteProduct(id);
        }


        //Edit Product
        [HttpPut()]
        public Task<IActionResult> EditCurrency(Product product)
        {
            return _productSer.EditProduct(product);
        }

    }
}
