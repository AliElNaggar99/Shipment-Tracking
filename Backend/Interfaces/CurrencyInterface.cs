using Microsoft.AspNetCore.Mvc;
using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Interfaces
{
    public interface CurrencyInterface
    {
        Task<List<CurrencyModel>> GetAllCurrencies();
        Task<ActionResult<CurrencyModel>> GetCurrency(int id);
        Task<IActionResult> AddCurrency(Currency currency);
        Task<IActionResult> DeleteCurrency(int id);
        Task<IActionResult> EditCurrency(Currency currency);
    }
}
