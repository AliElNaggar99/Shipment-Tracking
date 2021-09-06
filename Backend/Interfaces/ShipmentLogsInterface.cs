using Microsoft.AspNetCore.Mvc;
using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Interfaces
{
    public interface ShipmentLogsInterface
    {
        Task<List<ShipmentLogsModel>> GetAllShipmentLogs();
        Task<ActionResult<IEnumerable<ShipmentLogsModel>>> GetShipmentLog(int id);
        Task<IActionResult> AddShipmentLog(ShippmentLog SC);
        Task<IActionResult> DeleteShipmentLog(ShippmentLog logSh);
        Task<IActionResult> EditShipmentLog(ShippmentLog SC);
    }
}
