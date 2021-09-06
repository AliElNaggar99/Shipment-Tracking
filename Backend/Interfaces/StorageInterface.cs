using Microsoft.AspNetCore.Mvc;
using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Interfaces
{
    public interface StorageInterface
    {
        Task<List<StorageModel>> GetAllStorages();
        Task<ActionResult<StorageModel>> GetStorage(int id);
        Task<IActionResult> AddStorage(Storage storage);
        Task<IActionResult> DeleteStorage(int id);
        Task<IActionResult> EditStorage(Storage storage);
    }
}
