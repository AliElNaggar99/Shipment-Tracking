using Microsoft.AspNetCore.Mvc;
using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Interfaces
{
    public interface StatusInterface
    {
        Task<List<StatusModel>> GetAllStatus();
        Task<ActionResult<StatusModel>> GetStatus(int id);
        Task<IActionResult> AddStatus(Status status);
        Task<IActionResult> DeleteStatus(int id);
        Task<IActionResult> EditStatus(Status status);
    }
}
