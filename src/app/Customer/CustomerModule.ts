//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule} from '@angular/router'

import { CustomerComponent } from './CustomerComponent';
import { CustRoutes } from '../Routing/CustRouting'

@NgModule({
  declarations: [
    CustomerComponent,
  ],
  imports: [
    RouterModule.forChild(CustRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    //AppRoutingModule,
  ],
  providers: [],
  bootstrap: [CustomerComponent]      //startup component
})
export class CustoModule { }
