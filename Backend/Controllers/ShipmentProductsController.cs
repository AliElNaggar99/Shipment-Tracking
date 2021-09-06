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
    public class ShipmentProductsController
    {
        private readonly ShipmentProductsSer _SPSer;
        public ShipmentProductsController(ShipmentProductsSer SPSer)
        {
            _SPSer = SPSer;
        }
        // post: api/ShipmentProducts
        //Get All ShipmentProducts
        [HttpGet()]
        public Task<List<ShipmentProductsModel>> GetAllShipmentProducts()
        {
            return _SPSer.GetAllShipmentProducts();
        }

        //Get ShipmentProducts By ID
        [HttpGet("{id}")]
        public Task<ActionResult<IEnumerable<ShipmentProductsModel>>> GetShipmentProducts(int id)
        {
            return _SPSer.GetShipmentProducts(id);
        }

        [HttpPost()]
        //Add ShipmentProducts to the Database
        public Task<IActionResult> AddShipmentProduct(ShipmentProduct SL)
        {
            return _SPSer.AddShipmentProducts(SL);
        }

        //Delete ShipmentProducts by ID
        [HttpDelete()]
        public Task<IActionResult> DeletShipmentProduct(ShipmentProduct SL)
        {
            return _SPSer.DeleteShipmentProducts(SL);
        }

        //Edit ShipmentProducts
        [HttpPut()]
        public Task<IActionResult> EditShipmentProduct(ShipmentProduct SL)
        {
            return _SPSer.EditShipmentProducts(SL);
        }
    }
}
