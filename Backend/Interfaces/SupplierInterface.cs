using Microsoft.AspNetCore.Mvc;
using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace Purch_Managment.Handlers
{
    public interface SupplierInterface
    {
        Task<List<SupplierModel>> GetAllSuppliers();
        Task<ActionResult<SupplierModel>> GetSupplier(int id);
        Task<IActionResult> AddSupplier(Supplier supplier);
        Task<IActionResult> DeleteSupplier(int id);
        Task<IActionResult> EditSupplier(Supplier supplier);
    }
}
