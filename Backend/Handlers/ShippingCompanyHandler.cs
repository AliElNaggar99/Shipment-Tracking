using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Handlers
{
    public class ShippingCompanyHandler
    {
        private readonly Import_CompanyContext _context;
        public ShippingCompanyHandler(Import_CompanyContext context)
        {
            _context = context;
        }

        public ShippingCompanyModel ShippingCompanyHandlerToModel(ShippingCompany SC) =>
           new ShippingCompanyModel
           {
               ShCpId = SC.ShCpId,
               ShCpName = SC.ShCpName
           };
    }
}
