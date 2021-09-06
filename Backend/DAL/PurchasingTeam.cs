using System;
using System.Collections.Generic;

#nullable disable

namespace Purch_Managment.DAL
{
    public partial class PurchasingTeam
    {
        public PurchasingTeam()
        {
            Shipments = new HashSet<Shipment>();
        }

        public int PurcMemId { get; set; }
        public string PurcMemName { get; set; }

        public virtual ICollection<Shipment> Shipments { get; set; }
    }
}
