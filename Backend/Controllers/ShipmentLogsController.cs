using Microsoft.AspNetCore.Mvc;
using Purch_Managment.DAL;
using Purch_Managment.Models;
using Purch_Managment.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace Purch_Managment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShipmentLogsController
    {
        private readonly ShipmentLogsSer _SLSer;
        public ShipmentLogsController(ShipmentLogsSer SLSer)
        {
            _SLSer = SLSer;
        }
        // post: api/ShipmentLogs
        //Get All ShipmentLogs
        [HttpGet()]
        public Task<List<ShipmentLogsModel>> GetAllShipmentLogs()
        {
            return _SLSer.GetAllShipmentLogs();
        }

        //Get ShipmentLogs By ID
        [HttpGet("{id}")]
        public Task<ActionResult<IEnumerable<ShipmentLogsModel>>> GetShipmentLog(int id)
        {
            return _SLSer.GetShipmentLog(id);
        }

        [HttpPost()]
        //Add ShipmentLogs to the Database
        public Task<IActionResult> AddShipmentLog(ShippmentLog SL)
        {
            return _SLSer.AddShipmentLog(SL);
        }

        //Delete ShipmentLogs by ID
        [HttpDelete()]
        public Task<IActionResult> DeletShipmentLog(ShippmentLog SL)
        {
            return _SLSer.DeleteShipmentLog(SL);
        }

        //Edit ShipmentLogs
        [HttpPut()]
        public Task<IActionResult> EditShipmentLog(ShippmentLog SL)
        {
            return _SLSer.EditShipmentLog(SL);
        }
    }
}
