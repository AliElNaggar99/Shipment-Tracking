using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Handlers
{
    public class SupplierHandler
    {
        private readonly Import_CompanyContext _context;
        public SupplierHandler(Import_CompanyContext context)
        {
            _context = context;
        }

        public SupplierModel SupplierHandlerToModel(Supplier supplier) =>
           new SupplierModel
           {
               SpId = supplier.SpId,
               SpLoc = supplier.SpLoc,
               SpName = supplier.SpName
           };
    }
}
