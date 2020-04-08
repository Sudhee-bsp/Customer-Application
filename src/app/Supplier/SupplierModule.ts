//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule} from '@angular/router'

import { SupplierComponent } from './SupplierComponent';
import { SuppRoutes } from '../Routing/SuppRouting'

@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    RouterModule.forChild(SuppRoutes),
    CommonModule,
    //AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [SupplierComponent]      //startup component
})
export class SuppModule { }
