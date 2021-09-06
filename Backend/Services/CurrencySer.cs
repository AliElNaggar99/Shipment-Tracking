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
    public class CurrencySer: CurrencyInterface
    {
        private readonly Import_CompanyContext _context;
        private readonly ErrorHandler _controller;
        private CurrencyHandler _handler;
        public CurrencySer(Import_CompanyContext context, ErrorHandler controller, CurrencyHandler handler)
        {
            _context = context;
            _controller = controller;
            _handler = handler;
        }


        //Get All Currencies
        public async Task<List<CurrencyModel>> GetAllCurrencies()
        {
            var currencies = await _context.Currencies.Select(x => _handler.CurrencyHandlerToModel(x)).ToListAsync(); 
            return currencies;

        }

        //Get Currrency By ID
        public async Task<ActionResult<CurrencyModel>> GetCurrency(int id)
        {
            var Currency = await _context.Currencies.FindAsync(id);

            if (Currency == null)
            {
                return _controller.NotFound();
            }


            return _handler.CurrencyHandlerToModel(Currency);
        }


        //Add Currency to the Database
        public async Task<IActionResult> AddCurrency(Currency currency)
        {
            _context.Currencies.Add(currency);
            await _context.SaveChangesAsync();
            return _controller.CreatedAtAction(nameof(GetCurrency), new { id = currency.CurrenId}, _handler.CurrencyHandlerToModel(currency));
        }

        //Delete Currency by ID
        public async Task<IActionResult> DeleteCurrency(int id)
        {
            try
            {
                var currency = await _context.Currencies.FindAsync(id);
                _context.Entry(currency).State = EntityState.Deleted;
                _context.SaveChanges();
                return _controller.StatusCode(200);
            }
            catch (Exception ex)
            {
                return _controller.NotFound();

            }
        }
        //Edit Currency Name
        public async Task<IActionResult> EditCurrency(Currency currency)
        {

            try
            {
                _context.Entry(currency).State = EntityState.Modified;
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
