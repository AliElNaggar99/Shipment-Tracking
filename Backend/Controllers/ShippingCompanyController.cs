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
    public class ShippingCompanyController
    {
        private readonly ShippingCompanySer _ShippingCompanySer;
        public ShippingCompanyController(ShippingCompanySer shippingCompany)
        {
            _ShippingCompanySer = shippingCompany;
        }

        // post: api/ShippingCompany
        //Get All ShippingCompany
        [HttpGet()]
        public Task<List<ShippingCompanyModel>> GetAllShippingCompanys()
        {
            return _ShippingCompanySer.GetAllShippingCompanys();
        }

        //Get ShippingCompany By ID
        [HttpGet("{id}")]
        public Task<ActionResult<ShippingCompanyModel>> GetShippingCompany(int id)
        {
            return _ShippingCompanySer.GetShippingCompany(id);
        }

        [HttpPost()]
        //Add ShippingCompany to the Database
        public Task<IActionResult> AddShippingCompany(ShippingCompany shippingCompany)
        {
            return _ShippingCompanySer.AddShippingCompany(shippingCompany);
        }

        //Delete ShippingCompany by ID
        [HttpDelete("{id}")]
        public Task<IActionResult> DeleteShippingCompany(int id)
        {
            return _ShippingCompanySer.DeleteShippingCompany(id);
        }

        //Edit ShippingCompany
        [HttpPut()]
        public Task<IActionResult> EditShippingCompany(ShippingCompany shippingCompany)
        {
            return _ShippingCompanySer.EditShippingCompany(shippingCompany);
        }
    }
}
