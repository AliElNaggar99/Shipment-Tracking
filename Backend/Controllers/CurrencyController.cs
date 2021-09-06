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
    public class CurrencyController
    {
        private readonly CurrencySer _currencySer;
        public CurrencyController(CurrencySer currencySer)
        {
            _currencySer = currencySer;
        }
        // post: api/Currency
        //Get All Currencies
        [HttpGet()]
        public Task<List<CurrencyModel>> GetAllCurrencies()
        {
            return _currencySer.GetAllCurrencies();
        }

        //Get Currency By ID
        [HttpGet("{id}")]
        public Task<ActionResult<CurrencyModel>> GetCurrency(int id)
        {
            return _currencySer.GetCurrency(id);
        }

        [HttpPost()]
        //Add Currency to the Database
        public Task<IActionResult> AddCurrency(Currency currency)
        {
            return _currencySer.AddCurrency(currency);
        }

        //Delete Currency by ID
        [HttpDelete("{id}")]
        public Task<IActionResult> DeleteCurrency(int id)
        {
            return _currencySer.DeleteCurrency(id);
        }


        //Edit Currency
        [HttpPut("{id}")]
        public Task<IActionResult> EditCurrency(Currency currency)
        {
            return _currencySer.EditCurrency(currency);
        }

    }
}
