using Microsoft.AspNetCore.Mvc;
using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Interfaces
{
    public interface ShipmentInterface
    {
        Task<List<ShipmentModel>> GetAllShipments();
        //Get Shipments By ID
        Task<ActionResult<ShipmentModel>> GetShipment(int id);
        //Add Shipment to the Database
        Task<IActionResult> AddShipment(Shipment shipment);
        //Delete Shipment by ID
        Task<IActionResult> DeleteShipment(int id);
        //Edit Shipment Name
        Task<IActionResult> EditShipment(Shipment shipment);
    }
}
