using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Purch_Managment.DAL;
using Purch_Managment.Models;
using Purch_Managment.Services;

namespace Purch_Managment.Controllers
{
    [EnableCors("CorsApi")]
    [Route("api/[controller]")]
    [ApiController]
    public class ClearPorkerController
    {
        private readonly ClearPorkerSer _ClearPorkerSer ;


        public ClearPorkerController(ClearPorkerSer ClearPorkerSer)
        {
            _ClearPorkerSer = ClearPorkerSer;
        }


        //Get All Porkers
        [HttpGet()]
        public  Task<List<ClearPorkerModel>> GetAllClearPorker()
        {
            return _ClearPorkerSer.GetAllClearPorker();
        }

        //Get Poker By ID
        [HttpGet("{id}")]
        public  Task<ActionResult<ClearPorkerModel>> GetClearPorker(int id)
        {
            return _ClearPorkerSer.GetClearPorker(id);
        }

        // post: api/clearporker
        [HttpPost()]
        //Add Porker to the Database
        public  Task<IActionResult> AddClearPorker(ClearPorker clearProker)
        {
            return _ClearPorkerSer.AddClearPorker(clearProker);
        }

        //Delete Porker by ID
        [HttpDelete("{id}")]
        public  Task<IActionResult> DeleteClearPorker(int id)
        {
            return _ClearPorkerSer.DeleteClearPorker(id);
        }


        //Edit Porker Name
        [HttpPut()]
        public  Task<IActionResult> EditPorkerName(ClearPorker clearPorker)
        {
            return _ClearPorkerSer.EditPorkerName(clearPorker);
        }
    }
}