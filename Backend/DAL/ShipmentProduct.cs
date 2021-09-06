using System;
using System.Collections.Generic;

#nullable disable

namespace Purch_Managment.DAL
{
    public partial class ShipmentProduct
    {
        public int ShipmentId { get; set; }
        public int ProdId { get; set; }
        public int? Quantity { get; set; }
        public int? TotalPrice { get; set; }

        public virtual Product Prod { get; set; }
        public virtual Shipment Shipment { get; set; }
    }
}
