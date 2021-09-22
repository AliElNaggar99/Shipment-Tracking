export class ViewModel{
    ViewModelObject = {
        shipmentData:["shipmentId", "supplierName", "porkerName", "currencyName","storageName","portName","currentStatusName","shippingCompanyName","purchTeamName","wayOfTransport",
        "taxes","fines","taxesCurrencyName","estimatedDeliveryDate","actualDeliveryDate","actions"],
        shipmentColumn:["Shipment Id", "Supplier Name", "Broker Name", "Currency Name","Storage Name","Port Name","Current Status Name","Shipping Company Name","Purchasing Team Name","Way Of Transport",
        "Taxes","Fines","Taxes Currency Name","Estimated Delivery Date","Actual Delivery Date","Actions"],
        shipmentDataDBNames:["Supplier", "Broker", "Currency","Storage","Port","Current Status","Shipping Company","Purchasing Team","Taxes Currency","Way Of Transport",
        "Taxes","Fines"],
        shipmentDataDB:["supplierId", "porkerId", "currencyId","storageId","portId","currentStatusId","shippingCompanyId","purchTeamId","taxesCurrencyId","wayOfTransport",
        "taxes","fines"],

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

        storageData:["storageId","storageLocation","actions"],
        storageColumn:["Storage Id", "Storage Location","Actions"],
        storageDataDBNames:["Storage Location"],
        storageDataDB:["storageLocation"],

        portData:["portId","portName","actions"],
        portColumn:["Port Id", "Port Name","Actions"],
        portDataDBNames:["Port Name"],
        portDataDB:["portName"],

        
        statusData:["statusId","statusName","actions"],
        statusColumn:["Status Id", "Status Name","Actions"],
        statusDataDBNames:["Status Name"],
        statusDataDB:["statusName"],

        shippingCompanyData:["shCpId","shCpName","actions"],
        shippingCompanyColumn:["Shipping Company Id", "Shipping Company Name","Actions"],
        shippingCompanyDataDBNames:["Shipping Company Name"],
        shippingCompanyDataDB:["shCpName"],

        ShipmentProductsData:["prodId","prodName","quantity","prodPrice","totalPrice","actions"],
        ShipmentProductsColumn:["Product Id" , "Product Name","Quantity","Product Price","Total Price","Actions"],
        ShipmentProductsDataDBNames:["Quantity","Product Price","Total Price"],
        ShipmentProductsDataDB:["quantity","prodPrice","totalPrice"],

        PurchasingTeamData:["purcMemId","purcMemName","actions"],
        PurchasingTeamColumn:["Purchasing Member Id", "Purchasing Member Name","Actions"],
        PurchasingTeamDataDBNames:["Purchasing Member Name"],
        PurchasingTeamDataDB:["purcMemName"],

        ShipmentProductsPageData:["shipmentId","prodId","prodName","quantity","prodPrice","totalPrice","actions"],
        ShipmentProductsPageColumn:["Shipment Id","Product Id" , "Product Name","Quantity","Product Price","Total Price","Actions"],
        ShipmentProductsPageDataDBNames:["shipmentId","prodId","Quantity","Product Price","Total Price"],
        ShipmentProductsPageDataDB:["Shipment Id","Product" ,"quantity","prodPrice","totalPrice"],

        DropDownMenuNames:[{IDName:'spId' ,Name:'spName'},
        {IDName:'porkerId' , Name:"prokerName"},
        {IDName:'currenId' ,Name:'currenName'},
        {IDName:'storageId' ,Name:'storageLocation'},
        {IDName:'portId' ,Name:'portName'},
        {IDName:'statusId' ,Name:'statusName'},
        {IDName:'shCpId' ,Name:'shCpName'},
        {IDName:'purcMemId' ,Name:'purcMemName'},
        {IDName:'currenId' ,Name:'currenName'},
    ],


     ApiUrl:"https://purchmanagmentapi.azurewebsites.net/api"
    //ApiUrl:"https://localhost:44305/api"
      
    };

}
