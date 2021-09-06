using System;
using System.Collections.Generic;

#nullable disable

namespace Purch_Managment.DAL
{
    public partial class Shipment
    {
        public Shipment()
        {
            ShipmentProducts = new HashSet<ShipmentProduct>();
            ShippmentLogs = new HashSet<ShippmentLog>();
        }

        public int ShipmentId { get; set; }
        public int SupplierId { get; set; }
        public int PorkerId { get; set; }
        public int CurrencyId { get; set; }
        public int StorageId { get; set; }
        public int PortId { get; set; }
        public int CurrentStatusId { get; set; }
        public int ShippingCompanyId { get; set; }
        public int PurchTeamId { get; set; }
        public string WayOfTransport { get; set; }
        public int Taxes { get; set; }
        public int Fines { get; set; }
        public int TaxesCurrencyId { get; set; }
        public DateTime? EstimatedDeliveryDate { get; set; }
        public DateTime? ActualDeliveryDate { get; set; }

        public virtual Currency Currency { get; set; }
        public virtual Status CurrentStatus { get; set; }
        public virtual ClearPorker Porker { get; set; }
        public virtual Port Port { get; set; }
        public virtual PurchasingTeam PurchTeam { get; set; }
        public virtual ShippingCompany ShippingCompany { get; set; }
        public virtual Storage Storage { get; set; }
        public virtual Supplier Supplier { get; set; }
        public virtual Currency TaxesCurrency { get; set; }
        public virtual ICollection<ShipmentProduct> ShipmentProducts { get; set; }
        public virtual ICollection<ShippmentLog> ShippmentLogs { get; set; }
    }
}
