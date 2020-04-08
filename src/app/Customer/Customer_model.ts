import {NgForm, 
        FormGroup,
            FormControl,
                Validator,
        FormBuilder, 
        Validators} from '@angular/forms'     //FormBuilder builds above tree structure

//Create :- we create the validation object model
//Connect :- We connect the validation to the UI
//Check :- IsValid, IsDirty


export class Customer{
    CustomerCode:string = "";
    CustomerName:string = "";
    CustomerAmount:number;

    formCustomerGroup: FormGroup = null;
    constructor(){
        var _builder = new FormBuilder();
        this.formCustomerGroup = _builder.group({});  //Use the builder to create

        //add control --> then validations
        //Here we made, 1 control --> 1 validation
        this.formCustomerGroup.
            addControl("CustomerNameControl", 
                new FormControl('',Validators.required));

        //CustCode min 4 length max numeric
        var validationcollection = [];
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.pattern("^[0-9]{4,4}$"));

        this.formCustomerGroup.
            addControl("CustomerCodeControl", 
                new FormControl('',Validators.compose(validationcollection)));
    }
}