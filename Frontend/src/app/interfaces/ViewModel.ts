export class ViewModel{
    ViewModelObject = {
        shipmentData:["shipmentId", "supplierName", "porkerName", "currencyName","storageName","portName","currentStatusName","shippingCompanyName","purchTeamName","wayOfTransport",
        "taxes","fines","taxesCurrencyName","estimatedDeliveryDate","actualDeliveryDate","actions"],

        shipmentColumn:["Shipment Id", "Supplier Name", "Porker Name", "Currency Name","Storage Name","Port Name","Current Status Name","Shipping Company Name","Purchasing Team Name","Way Of Transport",
        "Taxes","Fines","Taxes Currency Name","Estimated Delivery Date","Actual Delivery Date","Actions"],

        shipmentDataDBNames:["Supplier", "Porker Id", "Currency Id","Storage Id","Port Id","Current Status Id","Shipping Company Id","Purchasing Team Id","Way Of Transport",
        "Taxes","Fines","Taxes Currency Id"],

        shipmentDataDB:["supplierId", "porkerId", "currencyId","storageId","portId","currentStatusId","shippingCompanyId","purchTeamId","wayOfTransport",
        "taxes","fines","taxesCurrencyId"],

        DropDownMenuNames:[{IDName:'spId' ,Name:'spName'}],
        supplierData:["spId","spName","spLoc","actions"],
        supplierColumn:["Supplier Id" , "Supplier Name","Supplier Location","Actions"],

        supplierDataDBNames:["Supplier Name","Supplier Location"],

        supplierDataDB:["spName", "spLoc"]

      
    };

}
