using System;
using System.Collections.Generic;

#nullable disable

namespace Purch_Managment.DAL
{
    public partial class Product
    {
        public Product()
        {
            ShipmentProducts = new HashSet<ShipmentProduct>();
        }

        public int ProdId { get; set; }
        public string ProdName { get; set; }
        public int ProdWeight { get; set; }
        public int ProdPrice { get; set; }

        public virtual ICollection<ShipmentProduct> ShipmentProducts { get; set; }
    }
}
