import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }


  getDataOnLoad(): Observable<any[]>{
    return this.http.get<any[]>('https://api.spacexdata.com/v3/launches?limit=100' , {
     headers : new HttpHeaders({
     accept : 'application/json; charset=utf-8'
     })
    });
  }

  getsuccessLaunch(successValue): Observable<any[]>{
    return this.http.get<any[]>('https://api.spacexdata.com/v3/launches?limit=100&launch_success=' + successValue , {
     headers : new HttpHeaders({
     accept : 'application/json; charset=utf-8'
     })
    });
  }

  getsuccessLanding(successValue, landingValue): Observable<any[]>{
    return this.http.get<any[]>('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + successValue +'&land_success=' + landingValue  , {
     headers : new HttpHeaders({
     accept : 'application/json; charset=utf-8'
     })
    });
  }

  getsuccesslaunchYear(successValue, landingValue, launchYear): Observable<any[]>{
    return this.http.get<any[]>('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + successValue +'&land_success=' + landingValue + '&launch_year=' +  launchYear , {
     headers : new HttpHeaders({
     accept : 'application/json; charset=utf-8'
     })
    });
  }
}
