using System;
using System.Collections.Generic;

#nullable disable

namespace Purch_Managment.DAL
{
    public partial class ShippmentLog
    {
        public int ShippmentId { get; set; }
        public int StatusId { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        public virtual Shipment Shippment { get; set; }
        public virtual Status Status { get; set; }
    }
}
