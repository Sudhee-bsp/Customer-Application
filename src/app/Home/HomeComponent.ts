import { Component } from '@angular/core';
import { BaseLogger } from "../Utility/Logger"


@Component({
  templateUrl: './HomeView.html',
})


export class HomeComponent {

  LogObj : BaseLogger = null;
  constructor(_logger : BaseLogger){
    this.LogObj = _logger;
    this.LogObj.Log();
  }
}

