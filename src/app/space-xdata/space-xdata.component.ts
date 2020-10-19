import { Component, OnInit } from '@angular/core';
import {ApiServicesService} from '../services/api-services.service';
import { SiblingServicesService} from '../services/sibling-services.service';
import { FilterComponent} from '../filter/filter.component';

@Component({
  selector: 'app-space-xdata',
  templateUrl: './space-xdata.component.html',
  styleUrls: ['./space-xdata.component.css']
})
export class SpaceXdataComponent implements OnInit {
  spaceXData_onload:any=[];

  constructor(public service:ApiServicesService, public sibService: SiblingServicesService) { }

  ngOnInit(): void {
      this.service.getDataOnLoad().subscribe(response =>{
        this.spaceXData_onload = response;
        console.log(this.spaceXData_onload);
      });
      /**** Launch Successfull ****/
      this.sibService.launchData.subscribe(message =>{

        this.spaceXData_onload = message
        console.log("--m--",message);
      });

      this.sibService.landingData.subscribe(msg =>{

        this.spaceXData_onload = msg
        console.log("--landing--",msg);
      });

      this.sibService.launchYearData.subscribe(object =>{

        this.spaceXData_onload = object
        console.log("--launchYear--",object);
      });
  }
}
