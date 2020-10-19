import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingServicesService {
  launchData = new Subject();
  landingData = new Subject();
  launchYearData = new Subject();

  constructor() { }

  communicateToSpaceXLaunch(obj) {
    this.launchData.next(obj);
  }

  communicateToSpaceXLanding(msg) {
    this.landingData.next(msg);
  }

  communicateToSpaceXLaunchYear(msg) {
    this.launchYearData.next(msg);
  }

}
