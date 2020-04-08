import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule} from '@angular/router'

import { MasterComponent } from './MasterComponent';
import { HomeComponent } from './HomeComponent';
import { MainRoutes } from '../Routing/MainRouting'
import { BaseLogger, DbLogger } from '../Utility/Logger';

@NgModule({
  declarations: [
    MasterComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [ {
    provide: BaseLogger,
    useClass: DbLogger
  } ],
  
  bootstrap: [MasterComponent]      //startup component
})
export class MainModule { }
