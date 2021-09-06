using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Handlers
{
    public class PortHandler
    {
        private readonly Import_CompanyContext _context;
        public PortHandler(Import_CompanyContext context)
        {
            _context = context;
        }

        public PortModel PortHandlerToModel(Port port) =>
           new PortModel
           {
               PortId = port.PortId,
               PortName = port.PortName
           };
    }
}
