using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Handlers
{
    public class ProductHandler
    {
        private readonly Import_CompanyContext _context;
        public ProductHandler(Import_CompanyContext context)
        {
            _context = context;
        }

        public ProductModel ProductHandlerToModel(Product product) =>
           new ProductModel
           {
                ProdId = product.ProdId,
                ProdName = product.ProdName,
                ProdPrice = product.ProdPrice,
                ProdWeight = product.ProdWeight
           };
    }
}
