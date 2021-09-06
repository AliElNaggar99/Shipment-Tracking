using Microsoft.AspNetCore.Mvc;
using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Interfaces
{
    public interface PortInterface
    {
        Task<List<PortModel>> GetAllPorts();
        Task<ActionResult<PortModel>> GetPort(int id);
        Task<IActionResult> AddPort(Port port);
        Task<IActionResult> DeletePort(int id);
        Task<IActionResult> EditPort(Port port);
    }
}
