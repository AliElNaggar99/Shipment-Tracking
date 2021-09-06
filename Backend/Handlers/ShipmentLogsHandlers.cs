using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Handlers
{
    public class ShipmentLogsHandlers
    {
        private  readonly Import_CompanyContext _context;
        public ShipmentLogsHandlers(Import_CompanyContext context)
        {
            _context = context;
        }

        public ShipmentLogsModel ShipmentLogsHandlerToModel(ShippmentLog SL) =>
           new ShipmentLogsModel
           {
              ShippmentId = SL.ShippmentId,
              StatusId = SL.StatusId,
              StatusName = SL.Status.StatusName,
              StartDate = SL.StartDate,
              EndDate = SL.EndDate
           };
    }
}
