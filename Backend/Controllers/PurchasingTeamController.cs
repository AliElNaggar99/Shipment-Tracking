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
    public class PurchasingTeamController
    {
        private readonly PurchasingTeamSer _PTSer;
        public PurchasingTeamController(PurchasingTeamSer PASer)
        {
            _PTSer = PASer;
        }
        // post: api/PurchasingTeam
        //Get All PurchasingTeams
        [HttpGet()]
        public Task<List<PurchasingTeamModel>> GetAllPurchasingTeams()
        {
            return _PTSer.GetAllPurchasingTeams();
        }

        //Get PurchasingTeam By ID
        [HttpGet("{id}")]
        public Task<ActionResult<PurchasingTeamModel>> GetPurchasingTeam(int id)
        {
            return _PTSer.GetPurchasingTeam(id);
        }

        [HttpPost()]
        //Add PurchasingTeam to the Database
        public Task<IActionResult> AddPurchasingTeam(PurchasingTeam PT)
        {
            return _PTSer.AddPurchasingTeam(PT);
        }

        //Delete PurchasingTeam by ID
        [HttpDelete("{id}")]
        public Task<IActionResult> DeletePurchasingTeam(int id)
        {
            return _PTSer.DeletePurchasingTeam(id);
        }


        //Edit PurchasingTeam
        [HttpPut()]
        public Task<IActionResult> EditPurchasingTeam(PurchasingTeam PT)
        {
            return _PTSer.EditPurchasingTeam(PT);
        }
    }
}
