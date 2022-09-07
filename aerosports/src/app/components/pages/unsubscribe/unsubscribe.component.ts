import { Component, OnInit } from "@angular/core";

declare var require: any

@Component({
  selector: "app-unsubscribe",
  templateUrl: "./unsubscribe.component.html",
  styleUrls: ["./unsubscribe.component.scss"]
})

export class UnsubscribeComponent implements OnInit {
  
  constructor() { 

  }

  headerStyle = "";
  // Footer Style
  footerStyle = "dark-bg";
  ngOnInit() {
   /* var SibApiV3Sdk = require('sib-api-v3-sdk');
    SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = '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';
    let apiInstance = new SibApiV3Sdk.ContactsApi();

    let identifier = 'manglesh.niranjan@gmail.com'; 

    let updateContact = new SibApiV3Sdk.UpdateContact(); 

    updateContact.attributes = {'EMAIL':'manglesh.niranjan@gmail.com','FIRSTNAME':'manglesh1'};

    apiInstance.updateContact(identifier, updateContact).then(function() {
      console.log('API called successfully.');
    }, function(error: any) {
      console.error(error);
    });
    
    curl --request POST \
  --url https://api.sendinblue.com/v3/contacts \
  --header 'api-key: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' \
  --header 'Content-Type: application/json' \
  --data '{"email": "manglesh.niranjan@gmail.com", "attributes": { "FNAME": "John", "LNAME": "Doe"},  "emailBlacklisted": false, "smsBlacklisted": false, "updateEnabled": true}'

    */

  }
}
