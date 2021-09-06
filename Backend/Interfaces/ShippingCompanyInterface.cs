using Microsoft.AspNetCore.Mvc;
using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Interfaces
{
    public interface ShippingCompanyInterface
    {
        Task<List<ShippingCompanyModel>> GetAllShippingCompanys();
        Task<ActionResult<ShippingCompanyModel>> GetShippingCompany(int id);
        Task<IActionResult> AddShippingCompany(ShippingCompany SC);
        Task<IActionResult> DeleteShippingCompany(int id);
        Task<IActionResult> EditShippingCompany(ShippingCompany SC);
    }
}
