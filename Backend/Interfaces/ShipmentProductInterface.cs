using Microsoft.AspNetCore.Mvc;
using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Interfaces
{
    interface ShipmentProductInterface
    {
        Task<List<ShipmentProductsModel>> GetAllShipmentProducts();
        Task<ActionResult<IEnumerable<ShipmentProductsModel>>> GetShipmentProducts(int id);
        Task<IActionResult> AddShipmentProducts(ShipmentProduct SP);
        Task<IActionResult> DeleteShipmentProducts(ShipmentProduct SP);
        Task<IActionResult> EditShipmentProducts(ShipmentProduct SP);
    }
}
