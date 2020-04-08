import { Component } from '@angular/core';
import { Customer } from "./Customer_model"
import { BaseLogger } from "../Utility/Logger"

@Component({
  templateUrl: './CustomerView.html',
})


export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel : Customer = new Customer();
  CustCollection : Array<Customer> = new Array<Customer>();
 
  LogObj : BaseLogger = null;
  constructor(_logger : BaseLogger){
    this.LogObj = _logger;
    this.LogObj.Log();
  }

  Add(){
    this.CustCollection.push(this.CustomerModel);  //will add item to the table
    this.CustomerModel = new Customer();           //after adding will clear the screen
  }
}
