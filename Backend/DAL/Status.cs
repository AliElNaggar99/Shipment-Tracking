using System;
using System.Collections.Generic;

#nullable disable

namespace Purch_Managment.DAL
{
    public partial class Status
    {
        public Status()
        {
            Shipments = new HashSet<Shipment>();
            ShippmentLogs = new HashSet<ShippmentLog>();
        }

        public int StatusId { get; set; }
        public string StatusName { get; set; }

        public virtual ICollection<Shipment> Shipments { get; set; }
        public virtual ICollection<ShippmentLog> ShippmentLogs { get; set; }
    }
}
