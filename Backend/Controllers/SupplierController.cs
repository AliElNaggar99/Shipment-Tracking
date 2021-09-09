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
    public class SupplierController
    {
        private readonly SupplierSer _supplierSer;
        public SupplierController(SupplierSer supplierSer)
        {
            _supplierSer = supplierSer;
        }

        // post: api/Supplier
        //Get All Suppliers
        [HttpGet()]
        public Task<List<SupplierModel>> GetAllSuppliers()
        {
            return _supplierSer.GetAllSuppliers();
        }

        //Get Supplier By ID
        [HttpGet("{id}")]
        public Task<ActionResult<SupplierModel>> GetSupplier(int id)
        {
            return _supplierSer.GetSupplier(id);
        }

        [HttpPost()]
        //Add Supplier to the Database
        public Task<IActionResult> AddSupplier(Supplier supplier)
        {
            return _supplierSer.AddSupplier(supplier);
        }

        //Delete Supplier by ID
        [HttpDelete("{id}")]
        public Task<IActionResult> DeleteSupplier(int id)
        {
            return _supplierSer.DeleteSupplier(id);
        }


        //Edit Supplier
        [HttpPut()]
        public Task<IActionResult> EditSupplier(Supplier supplier)
        {
            return _supplierSer.EditSupplier(supplier);
        }
    }
}
