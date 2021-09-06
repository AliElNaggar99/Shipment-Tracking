using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Handlers
{
    public class PurchasingTeamHandler
    {
        private readonly Import_CompanyContext _context;
        public PurchasingTeamHandler(Import_CompanyContext context)
        {
            _context = context;
        }

        public PurchasingTeamModel PurchasingTeamHandlerToModel(PurchasingTeam PT) =>
           new PurchasingTeamModel
           {
               PurcMemId = PT.PurcMemId,
               PurcMemName = PT.PurcMemName
           };
    }
}
