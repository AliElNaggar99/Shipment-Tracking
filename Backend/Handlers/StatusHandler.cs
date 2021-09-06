using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Handlers
{
    public class StatusHandler
    {
        private readonly Import_CompanyContext _context;
        public StatusHandler(Import_CompanyContext context)
        {
            _context = context;
        }

        public StatusModel StatusHandlerToModel(Status status) =>
           new StatusModel
           {
             StatusId = status.StatusId,
             StatusName = status.StatusName
           };
    }
}
