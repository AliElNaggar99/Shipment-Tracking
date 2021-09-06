using System;
using System.Collections.Generic;

#nullable disable

namespace Purch_Managment.DAL
{
    public partial class Storage
    {
        public Storage()
        {
            Shipments = new HashSet<Shipment>();
        }

        public int StorageId { get; set; }
        public string StorageLocation { get; set; }

        public virtual ICollection<Shipment> Shipments { get; set; }
    }
}
