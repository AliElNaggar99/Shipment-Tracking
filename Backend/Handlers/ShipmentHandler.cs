using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Handlers
{
    public class ShipmentHandler
    {
        private readonly Import_CompanyContext _context;
        public ShipmentHandler(Import_CompanyContext context)
        {
            _context = context;
        }

        public  ShipmentModel ShipmentHandlerToModel(Shipment shipment) =>
           new ShipmentModel
           {
                ShipmentId = shipment.ShipmentId,
                SupplierId = shipment.SupplierId,
                SupplierName = shipment.Supplier.SpName,
                PorkerId = shipment.PorkerId,
                PorkerName = shipment.Porker.ProkerName,
                CurrencyId = shipment.CurrencyId,
                CurrencyName = shipment.Currency.CurrenName,
                StorageId = shipment.StorageId,
                StorageName = shipment.Storage.StorageLocation,
                PortId = shipment.PortId,
                PortName = shipment.Port.PortName,
                CurrentStatusId = shipment.CurrentStatusId,
                CurrentStatusName = shipment.CurrentStatus.StatusName,
                ShippingCompanyId = shipment.ShippingCompanyId,
                ShippingCompanyName = shipment.ShippingCompany.ShCpName,
                PurchTeamId = shipment.PurchTeamId,
                PurchTeamName =shipment.PurchTeam.PurcMemName ,
                WayOfTransport = shipment.WayOfTransport,
                Taxes = shipment.Taxes,
                Fines = shipment.Fines,
                TaxesCurrencyId = shipment.TaxesCurrencyId,
                TaxesCurrencyName = shipment.TaxesCurrency.CurrenName,
                EstimatedDeliveryDate = shipment.EstimatedDeliveryDate.Value.Date.ToShortDateString(),
               ActualDeliveryDate = shipment.ActualDeliveryDate.Value.Date.ToShortDateString(),
           };
    }
}
