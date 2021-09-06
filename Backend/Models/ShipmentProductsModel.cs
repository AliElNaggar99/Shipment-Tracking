using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Models
{
    public class ShipmentProductsModel
    {
        public int ShipmentId { get; set; }
        public int ProdId { get; set; }
        public string ProdName { get; set; }
        public int? Quantity { get; set; }
        public int? TotalPrice { get; set; }
    }
}
