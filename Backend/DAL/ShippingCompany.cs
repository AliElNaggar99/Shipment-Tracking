using System;
using System.Collections.Generic;

#nullable disable

namespace Purch_Managment.DAL
{
    public partial class ShippingCompany
    {
        public ShippingCompany()
        {
            Shipments = new HashSet<Shipment>();
        }

        public int ShCpId { get; set; }
        public string ShCpName { get; set; }

        public virtual ICollection<Shipment> Shipments { get; set; }
    }
}
