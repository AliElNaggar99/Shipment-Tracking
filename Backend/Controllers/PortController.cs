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
    public class PortController
    {
        private readonly PortSer _PortSer;
        public PortController(PortSer portSer)
        {
            _PortSer = portSer;
        }
        // post: api/Port
        //Get All Ports
        [HttpGet()]
        public Task<List<PortModel>> GetAllPorts()
        {
            return _PortSer.GetAllPorts();
        }

        //Get Port By ID
        [HttpGet("{id}")]
        public Task<ActionResult<PortModel>> GetPort(int id)
        {
            return _PortSer.GetPort(id);
        }

        [HttpPost()]
        //Add Port to the Database
        public Task<IActionResult> AddPort(Port port)
        {
            return _PortSer.AddPort(port);
        }

        //Delete Port by ID
        [HttpDelete("{id}")]
        public Task<IActionResult> DeletePort(int id)
        {
            return _PortSer.DeletePort(id);
        }

        //Edit Port
        [HttpPut()]
        public Task<IActionResult> EditPort(Port port)
        {
            return _PortSer.EditPort(port);
        }
    }
}
