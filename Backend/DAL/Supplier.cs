using System;
using System.Collections.Generic;

#nullable disable

namespace Purch_Managment.DAL
{
    public partial class Supplier
    {
        public Supplier()
        {
            Shipments = new HashSet<Shipment>();
        }

        public int SpId { get; set; }
        public string SpName { get; set; }
        public string SpLoc { get; set; }

        public virtual ICollection<Shipment> Shipments { get; set; }
    }
}
