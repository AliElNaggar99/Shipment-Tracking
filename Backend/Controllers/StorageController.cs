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
    public class StorageController
    {
        private readonly StorageSer _storageSer;
        public StorageController(StorageSer storageSer)
        {
            _storageSer = storageSer;
        }
        // post: api/Storage
        //Get All Storages
        [HttpGet()]
        public Task<List<StorageModel>> GetAllStorages()
        {
            return _storageSer.GetAllStorages();
        }

        //Get Storage By ID
        [HttpGet("{id}")]
        public Task<ActionResult<StorageModel>> GetStorage(int id)
        {
            return _storageSer.GetStorage(id);
        }

        [HttpPost()]
        //Add Storage to the Database
        public Task<IActionResult> AddStorage(Storage storage)
        {
            return _storageSer.AddStorage(storage);
        }

        //Delete Storage by ID
        [HttpDelete("{id}")]
        public Task<IActionResult> DeleteStorage(int id)
        {
            return _storageSer.DeleteStorage(id);
        }


        //Edit Storage
        [HttpPut()]
        public Task<IActionResult> EditStorage(Storage storage)
        {
            return _storageSer.EditStorage(storage);
        }
    }
}
