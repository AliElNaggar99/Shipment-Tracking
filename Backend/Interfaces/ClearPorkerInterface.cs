using Microsoft.AspNetCore.Mvc;
using Purch_Managment.DAL;
using Purch_Managment.Models;
using Purch_Managment.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Interfaces
{
    public interface ClearPorkerInterface
    {
        Task<List<ClearPorkerModel>> GetAllClearPorker();
        Task<ActionResult<ClearPorkerModel>> GetClearPorker(int id);
        Task<IActionResult> AddClearPorker(ClearPorker clearProker);
        Task<IActionResult> DeleteClearPorker(int id);

        Task<IActionResult> EditPorkerName(int id, ClearPorker clearPorker);

    }
}
