using System;
using System.Collections.Generic;

#nullable disable

namespace Purch_Managment.DAL
{
    public partial class Port
    {
        public Port()
        {
            Shipments = new HashSet<Shipment>();
        }

        public int PortId { get; set; }
        public string PortName { get; set; }

        public virtual ICollection<Shipment> Shipments { get; set; }
    }
}
