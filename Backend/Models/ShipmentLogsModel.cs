using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Models
{
    public class ShipmentLogsModel
    {
        public int ShippmentId { get; set; }
        public int StatusId { get; set; }

        public string StatusName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}
