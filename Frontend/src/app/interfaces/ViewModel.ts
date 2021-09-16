export class ViewModel{
    ViewModelObject = {
        shipmentData:["shipmentId", "supplierName", "porkerName", "currencyName","storageName","portName","currentStatusName","shippingCompanyName","purchTeamName","wayOfTransport",
        "taxes","fines","taxesCurrencyName","estimatedDeliveryDate","actualDeliveryDate","actions"],
        shipmentColumn:["Shipment Id", "Supplier Name", "Porker Name", "Currency Name","Storage Name","Port Name","Current Status Name","Shipping Company Name","Purchasing Team Name","Way Of Transport",
        "Taxes","Fines","Taxes Currency Name","Estimated Delivery Date","Actual Delivery Date","Actions"],
        shipmentDataDBNames:["Supplier", "Porker", "Currency","Storage Id","Port Id","Current Status Id","Shipping Company Id","Purchasing Team Id","Way Of Transport",
        "Taxes","Fines","Taxes Currency Id"],
        shipmentDataDB:["supplierId", "porkerId", "currencyId","storageId","portId","currentStatusId","shippingCompanyId","purchTeamId","wayOfTransport",
        "taxes","fines","taxesCurrencyId"],

        supplierData:["spId","spName","spLoc","actions"],
        supplierColumn:["Supplier Id" , "Supplier Name","Supplier Location","Actions"],
        supplierDataDBNames:["Supplier Name","Supplier Location"],
        supplierDataDB:["spName", "spLoc"],

        productData:["prodId","prodName","prodWeight","prodPrice","actions"],
        productColumn:["Product Id" , "Product Name","Product Weight","Product Price","Actions"],
        productDataDBNames:["Product Name","Product Weight","Product Price"],
        productDataDB:["prodName","prodWeight","prodPrice"],

        brokerData:["porkerId","prokerName","actions"],
        brokerColumn:["Broker Id", "Broker Name","Actions"],
        brokerDataDBNames:["Broker Name"],
        brokerDataDB:["prokerName"],

        currenyData:["currenId","currenName","actions"],
        currenyColumn:["Currency Id", "Currency Name","Actions"],
        currenyDataDBNames:["Currency Name"],
        currenyDataDB:["currenName"],


        ShipmentProductsData:["prodId","prodName","quantity","prodPrice","totalPrice","actions"],
        ShipmentProductsColumn:["Product Id" , "Product Name","Quantity","Product Price","Total Price","Actions"],
        ShipmentProductsDataDBNames:["Quantity","Product Price","Total Price"],
        ShipmentProductsDataDB:["quantity","prodPrice","totalPrice"],




        DropDownMenuNames:[{IDName:'spId' ,Name:'spName'},{IDName:'porkerId' , Name:"prokerName"},{IDName:'currenId' ,Name:'currenName'}]

      
    };

}
