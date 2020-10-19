import { Component, OnInit } from '@angular/core';
import {ApiServicesService} from '../services/api-services.service';
import { SiblingServicesService} from '../services/sibling-services.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  viewAttendanceData:any;
  successValue: any;
  LaunchValue: any;
  landingVal: any;
  launchYear: any;
  // status: boolean = false;
  // launchSuccessValue: any;

  constructor(public service:ApiServicesService, public sibService: SiblingServicesService ) { }

  ngOnInit(): void {


  }

  successLaunch($event) {
    debugger;
    // this.status = !this.status;
    let target = $event.target || $event.srcElement || $event.currentTarget;
    let valAttr = target.attributes.value;
    this.LaunchValue = valAttr.nodeValue;
    console.log("--value--",this.LaunchValue);
    this.service.getsuccessLaunch(this.LaunchValue).subscribe(response =>{
      // this.launchSuccessValue = response;
      this.sibService.communicateToSpaceXLaunch(response);
      // console.log("---ddd-----", response)
    })

    if( target.nodeName === "BUTTON" ) {

      let isCertainButtonAlreadyActive = target.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.removeClass("active");
      }

      target.className += " active";
    }


  }


  successlanding($event) {
    // this.status = !this.status;
    let target = $event.target || $event.srcElement || $event.currentTarget;
    let valAttr = target.attributes.value;
    this.landingVal = valAttr.nodeValue;
    console.log("--filter Landing value--",this.landingVal);
    this.service.getsuccessLanding(this.LaunchValue, this.landingVal).subscribe(response =>{
      this.sibService.communicateToSpaceXLaunch(response);
      console.log("---filter Landing-----", response)
    })

    if( target.nodeName === "BUTTON" ) {

      let isCertainButtonAlreadyActive = target.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.removeClass("active");
      }

      target.className += " active";
    }

  }



  /****** Launch year ****** */
  LaunchYearClick($event) {
    debugger;
    // this.status = !this.status;
    let target = $event.target || $event.srcElement || $event.currentTarget;
    let valAttr = target.attributes.value;
    this.launchYear = valAttr.nodeValue;
    console.log("-- LaunchYear value--",this.launchYear);
    this.service.getsuccesslaunchYear(this.LaunchValue, this.landingVal, this.launchYear).subscribe(response =>{
      this.sibService.communicateToSpaceXLaunch(response);
      console.log("--- Filter LaunchYear-----", response)
    })

    if( target.nodeName === "BUTTON" ) {

      let isCertainButtonAlreadyActive = target.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.removeClass("active");
      }

      target.className += " active";
    }
  }
}
