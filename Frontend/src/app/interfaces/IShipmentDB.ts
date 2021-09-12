export interface IShipmentDB {
    shipmentId?: number;
    supplierId?: number;
    porkerId?: number;
    currencyId?: number;
    storageId?: number;
    portId?: number;
    currentStatusId?: number;
    shippingCompanyId?: number;
    purchTeamId?: number;
    wayOfTransport?: string;
    taxes?:number;
    fines?:number;
    taxesCurrencyId?: number;
    estimatedDeliveryDate?: Date;
    actualDeliveryDate?: Date;
  }