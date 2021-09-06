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
    public class StatusController
    {
        private readonly StatusSer _StatusSer;
        public StatusController(StatusSer statusSer)
        {
            _StatusSer = statusSer;
        }
        // post: api/Status
        //Get All Status
        [HttpGet()]
        public Task<List<StatusModel>> GetAllStatus()
        {
            return _StatusSer.GetAllStatus();
        }

        //Get Status By ID
        [HttpGet("{id}")]
        public Task<ActionResult<StatusModel>> GetStatus(int id)
        {
            return _StatusSer.GetStatus(id);
        }

        [HttpPost()]
        //Add Status to the Database
        public Task<IActionResult> AddStatus(Status status)
        {
            return _StatusSer.AddStatus(status);
        }

        //Delete Status by ID
        [HttpDelete("{id}")]
        public Task<IActionResult> DeleteStatus(int id)
        {
            return _StatusSer.DeleteStatus(id);
        }

        //Edit Status
        [HttpPut()]
        public Task<IActionResult> EditStatus(Status status)
        {
            return _StatusSer.EditStatus(status);
        }
    }
}
