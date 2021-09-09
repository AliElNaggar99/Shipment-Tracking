export interface IShipment {
    shipmentId: number;
    supplierId: number;
    supplierName: string;
    porkerId: number;
    porkerName: string;
    currencyId: number;
    currencyName: string;
    storageId: number;
    storageName: string;
    portId: number;
    portName: string;
    currentStatusId: number;
    currentStatusName: string;
    shippingCompanyId: number;
    shippingCompanyName: string;
    purchTeamId: number;
    purchTeamName: string;
    wayOfTransport: string;
    taxes:number;
    fines:number;
    taxesCurrencyId: number;
    taxesCurrencyName: string;
    estimatedDeliveryDate: Date;
    actualDeliveryDate: Date;
  }