using System;
using System.Collections.Generic;

#nullable disable

namespace Purch_Managment.DAL
{
    public partial class Currency
    {
        public Currency()
        {
            ShipmentCurrencies = new HashSet<Shipment>();
            ShipmentTaxesCurrencies = new HashSet<Shipment>();
        }

        public int CurrenId { get; set; }
        public string CurrenName { get; set; }

        public virtual ICollection<Shipment> ShipmentCurrencies { get; set; }
        public virtual ICollection<Shipment> ShipmentTaxesCurrencies { get; set; }
    }
}
