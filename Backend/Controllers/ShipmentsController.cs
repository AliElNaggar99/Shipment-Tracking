using Microsoft.AspNetCore.Cors;
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
    [EnableCors("CorsApi")]
    [Route("api/[controller]")]
    [ApiController]
    public class ShipmentsController
    {
        private readonly ShipmentSer _ShipmentSer;
        public ShipmentsController(ShipmentSer ShipmentSer)
        {
            _ShipmentSer = ShipmentSer;
        }

        //Get All Shipment
        [HttpGet()]
        public Task<List<ShipmentModel>> GetAllShipments()
        {
            return _ShipmentSer.GetAllShipments();
        }

        //Get Shipment By ID
        [HttpGet("{id}")]
        public Task<ActionResult<ShipmentModel>> GetShipment(int id)
        {
            return _ShipmentSer.GetShipment(id);
        }


        // post: api/shipment
        [HttpPost()]
        //Add shipment to the Database
        public Task<IActionResult> AddShipment(Shipment shipment)
        {
            return _ShipmentSer.AddShipment(shipment);
        }

        //Delete shipment by ID
        [HttpDelete("{id}")]
        public Task<IActionResult> DeleteShipment(int id)
        {
            return _ShipmentSer.DeleteShipment(id);
        }

        //Edit Shipment
        [HttpPut()]
        public Task<IActionResult> EditShipment(int id, Shipment shipment)
        {
            return _ShipmentSer.EditShipment(id,shipment);
        }


    }
}
