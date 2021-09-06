using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Models
{
    public class ShipmentModel
    {
        public int ShipmentId { get; set; }
        public int SupplierId { get; set; }
        public string SupplierName { get; set; }
        public int PorkerId { get; set; }
        public string PorkerName { get; set; }
        public int CurrencyId { get; set; }
        public string CurrencyName { get; set; }
        public int StorageId { get; set; }
        public string StorageName { get; set; }
        public int PortId { get; set; }
        public string PortName { get; set; }
        public int CurrentStatusId { get; set; }
        public string CurrentStatusName { get; set; }
        public int ShippingCompanyId { get; set; }
        public string ShippingCompanyName { get; set; }
        public int PurchTeamId { get; set; }
        public string PurchTeamName { get; set; }
        public string WayOfTransport { get; set; }
        public int Taxes { get; set; }
        public int Fines { get; set; }
        public int TaxesCurrencyId { get; set; }
        public string TaxesCurrencyName { get; set; }
        public DateTime? EstimatedDeliveryDate { get; set; }
        public DateTime? ActualDeliveryDate { get; set; }
    }
}
