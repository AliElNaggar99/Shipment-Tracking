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
    public class ShipmentProductsSer : ShipmentProductInterface
    {
        private readonly Import_CompanyContext _context;
        private readonly ErrorHandler _controller;
        private ShipmentProductsHandler _handler;
        public ShipmentProductsSer(Import_CompanyContext context, ErrorHandler controller, ShipmentProductsHandler handler)
        {
            _context = context;
            _controller = controller;
            _handler = handler;
        }


        //Get All ShipmentProducts
        public async Task<List<ShipmentProductsModel>> GetAllShipmentProducts()
        {
            var Prods = await _context.ShipmentProducts.Include(s => s.Prod).Select(x => _handler.ShipmentProductsHandlerToModel(x)).ToListAsync();
            return Prods;
        }

        //Get ShipmentProducts By ID
        public async Task<ActionResult<IEnumerable<ShipmentProductsModel>>> GetShipmentProducts(int id)
        {
            var prod = await _context.ShipmentProducts.Include(s => s.Prod).Where(x => x.ShipmentId == id).Select(x => _handler.ShipmentProductsHandlerToModel(x)).ToListAsync();

            if (prod == null || !prod.Any())
            {
                return _controller.NotFound();
            }
            return prod;
        }


        //Add ShipmentProducts to the Database
        public async Task<IActionResult> AddShipmentProducts(ShipmentProduct SP)
        {
            try
            {
                _context.ShipmentProducts.Add(SP);
                await _context.SaveChangesAsync();
                return _controller.StatusCode(200);

            }
            catch (Exception ex)
            {
                return _controller.StatusCode(400);
            }
        }

        //Delete ShipmentProducts by ID
        public async Task<IActionResult> DeleteShipmentProducts(ShipmentProduct SP)
        {
            try
            {
                var Prod = await _context.ShipmentProducts.FindAsync(SP.ShipmentId,SP.ProdId);
                _context.Entry(Prod).State = EntityState.Deleted;
                _context.SaveChanges();
                return _controller.StatusCode(200);
            }
            catch (Exception ex)
            {
                return _controller.NotFound();

            }
        }
        //Edit ShipmentProducts Name
        public async Task<IActionResult> EditShipmentProducts(ShipmentProduct SP)
        {

            try
            {
                _context.Entry(SP).State = EntityState.Modified;
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

