using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Handlers
{
    public class ShipmentProductsHandler
    {
        private readonly Import_CompanyContext _context;
        public ShipmentProductsHandler(Import_CompanyContext context)
        {
            _context = context;
        }

        public ShipmentProductsModel ShipmentProductsHandlerToModel(ShipmentProduct SP) =>
           new ShipmentProductsModel
           {
               ShipmentId = SP.ShipmentId,
               ProdId = SP.ProdId,
               ProdName = SP.Prod.ProdName,
               Quantity = SP.Quantity,
               TotalPrice = SP.TotalPrice,
               ProdPrice = SP.Prod.ProdPrice,
               ProdWeight = SP.Prod.ProdWeight
             
           };
    }
}
