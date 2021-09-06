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
    public class ShippingCompanySer : ShippingCompanyInterface
    {

        private readonly Import_CompanyContext _context;
        private readonly ErrorHandler _controller;
        private ShippingCompanyHandler _handler;
        public ShippingCompanySer(Import_CompanyContext context, ErrorHandler controller, ShippingCompanyHandler handler)
        {
            _context = context;
            _controller = controller;
            _handler = handler;
        }


        //Get All ShippingCompanys
        public async Task<List<ShippingCompanyModel>> GetAllShippingCompanys()
        {
            var ShippingCompanys = await _context.ShippingCompanies.Select(x => _handler.ShippingCompanyHandlerToModel(x)).ToListAsync();
            return ShippingCompanys;

        }

        //Get ShippingCompany By ID
        public async Task<ActionResult<ShippingCompanyModel>> GetShippingCompany(int id)
        {
            var ShippingCompany = await _context.ShippingCompanies.FindAsync(id);

            if (ShippingCompany == null)
            {
                return _controller.NotFound();
            }


            return _handler.ShippingCompanyHandlerToModel(ShippingCompany);
        }


        //Add ShippingCompany to the Database
        public async Task<IActionResult> AddShippingCompany(ShippingCompany shippingCompany)
        {
            _context.ShippingCompanies.Add(shippingCompany);
            await _context.SaveChangesAsync();
            return _controller.CreatedAtAction(nameof(GetShippingCompany), new { id = shippingCompany.ShCpId }, _handler.ShippingCompanyHandlerToModel(shippingCompany));
        }

        //Delete ShippingCompany by ID
        public async Task<IActionResult> DeleteShippingCompany(int id)
        {
            try
            {
                var ShippingCompany = await _context.ShippingCompanies.FindAsync(id);
                _context.Entry(ShippingCompany).State = EntityState.Deleted;
                _context.SaveChanges();
                return _controller.StatusCode(200);
            }
            catch (Exception ex)
            {
                return _controller.NotFound();

            }
        }
        //Edit ShippingCompany Name
        public async Task<IActionResult> EditShippingCompany(ShippingCompany shippingCompany)
        {

            try
            {
                _context.Entry(shippingCompany).State = EntityState.Modified;
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
