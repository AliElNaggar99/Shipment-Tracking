using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Handlers
{
    public class ClearPorkerHandler
    {
        private readonly Import_CompanyContext _context;
        public ClearPorkerHandler(Import_CompanyContext context)
        {
            _context = context;
        }

        public ClearPorkerModel ClearPorkerHandlerToModel(ClearPorker clearPorker) =>
           new ClearPorkerModel
           {
              PorkerId = clearPorker.PorkerId,
              ProkerName = clearPorker.ProkerName
           };
    }
}
