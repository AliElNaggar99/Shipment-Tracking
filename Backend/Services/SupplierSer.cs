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
    public class SupplierSer: SupplierInterface
    {
        private readonly Import_CompanyContext _context;
        private readonly ErrorHandler _controller;
        private SupplierHandler _handler;
        public SupplierSer(Import_CompanyContext context, ErrorHandler controller, SupplierHandler handler)
        {
            _context = context;
            _controller = controller;
            _handler = handler;
        }


        //Get All Suppliers
        public async Task<List<SupplierModel>> GetAllSuppliers()
        {
            var Suppliers = await _context.Suppliers.Select(x => _handler.SupplierHandlerToModel(x)).ToListAsync();
            return Suppliers;

        }

        //Get Supplier By ID
        public async Task<ActionResult<SupplierModel>> GetSupplier(int id)
        {
            var Supplier = await _context.Suppliers.FindAsync(id);

            if (Supplier == null)
            {
                return _controller.NotFound();
            }


            return _handler.SupplierHandlerToModel(Supplier);
        }


        //Add Supplier to the Database
        public async Task<IActionResult> AddSupplier(Supplier supplier)
        {
            _context.Suppliers.Add(supplier);
            await _context.SaveChangesAsync();
            return _controller.CreatedAtAction(nameof(GetSupplier), new { id = supplier.SpId }, _handler.SupplierHandlerToModel(supplier));
        }

        //Delete Supplier by ID
        public async Task<IActionResult> DeleteSupplier(int id)
        {
            try
            {
                var Supplier = await _context.Suppliers.FindAsync(id);
                _context.Entry(Supplier).State = EntityState.Deleted;
                _context.SaveChanges();
                return _controller.StatusCode(200);
            }
            catch (Exception ex)
            {
                return _controller.NotFound();

            }
        }
        //Edit Supplier Name
        public async Task<IActionResult> EditSupplier(Supplier supplier)
        {
            try
            {
                _context.Entry(supplier).State = EntityState.Modified;
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
