using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Handlers
{
    public class CurrencyHandler
    {
        private readonly Import_CompanyContext _context;
        public CurrencyHandler(Import_CompanyContext context)
        {
            _context = context;
        }

        public CurrencyModel CurrencyHandlerToModel(Currency currency) =>
           new CurrencyModel
           {
               CurrenId = currency.CurrenId,
               CurrenName = currency.CurrenName
           };
    }
}
