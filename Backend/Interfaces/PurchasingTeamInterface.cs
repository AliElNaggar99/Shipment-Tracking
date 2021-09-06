using Microsoft.AspNetCore.Mvc;
using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Interfaces
{
    public interface PurchasingTeamInterface
    {
        Task<List<PurchasingTeamModel>> GetAllPurchasingTeams();
        Task<ActionResult<PurchasingTeamModel>> GetPurchasingTeam(int id);
        Task<IActionResult> AddPurchasingTeam(PurchasingTeam PA);
        Task<IActionResult> DeletePurchasingTeam(int id);
        Task<IActionResult> EditPurchasingTeam(PurchasingTeam PA);
    }
}
