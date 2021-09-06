using Microsoft.AspNetCore.Mvc;
using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Interfaces
{
    public interface ProductInterface
    {
        Task<List<ProductModel>> GetAllProducts();
        Task<ActionResult<ProductModel>> GetProduct(int id);
        Task<IActionResult> AddProduct(Product product);
        Task<IActionResult> DeleteProduct(int id);
        Task<IActionResult> EditProduct(Product product);
    }
}
