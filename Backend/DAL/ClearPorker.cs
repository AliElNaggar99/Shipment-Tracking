using System;
using System.Collections.Generic;

#nullable disable

namespace Purch_Managment.DAL
{
    public partial class ClearPorker
    {
        public ClearPorker()
        {
            Shipments = new HashSet<Shipment>();
        }

        public int PorkerId { get; set; }
        public string ProkerName { get; set; }

        public virtual ICollection<Shipment> Shipments { get; set; }
    }
}
