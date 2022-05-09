import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Bus } from '../Bus/Bus';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})

export class BusService {

  private listOfAvaliableBuses!:Array<any>;
  // private selectedBus$:Subject<any>;
  
  constructor(private httpServices:HttpService) { 
    // this.selectedBus$ = new Subject<any>();
  }
  
  getAllBusesByLocation(){
    const bus:Bus = {
      id:1,
      busName: "orange Travels",
      startTime: "11:30",
      reachingTime: "4:00",
      totalTravelHours: "6hr 0m",
      type:"seater",
      boardingLocation:"Coimbatore",
      destinationLocation:"Chennai",
      pickupPoint:"Gandhipuram",
      dropingPoint:"kayambedu",
      seatPrice:"400",
      numberOfSeats: 10
    }
    
    let buses = this.httpServices.getAllBusesByLocation();
    
    // this.listOfAvaliableBuses.concat(buses);
    
    return bus;
  }
  
  getSelectedBus(){    
    // return this.selectedBus$;
  }
  
  setSelectedBus(bus:any){
    // this.selectedBus$.next(bus);
  }

}

