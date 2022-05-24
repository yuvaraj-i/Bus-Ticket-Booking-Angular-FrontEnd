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
  private selectedBus$:any = [];
  seats:number[] = [];
  
  constructor(private httpServices:HttpService) { 
    // this.selectedBus$ = new Subject<any>();
    // this.seats = seats;
  }
  
  getAllBusesByLocation(){
    const bus:Bus = {
      id:1,
      busName: "orange Travels",
      startingTime: "11:30",
      reachingTime: "4:00",
      totalTravelHours: "6hr 0m",
      type:"seater",
      startLocation:"Coimbatore",
      endLocation:"Chennai",
      pickupPoint:"Gandhipuram",
      dropingPoint:"kayambedu",
      seatPrice:"400",
      numberOfSeats: 10,
    }
    
    // let buses = this.httpServices.getAllBusesByLocation();
    
    // this.listOfAvaliableBuses.concat(buses);
    
    return bus;
  }
  
  getSelectedBus(){    
    return this.selectedBus$[0];
  }
  
  setSelectedBus(busObservable:any){
    if(this.selectedBus$.lenght != 0) {
      this.selectedBus$ = [];
    }

    this.selectedBus$.push(busObservable);
  }

  setSeats(seatNumber:number){
    this.seats.unshift(seatNumber);
  }

  getSeats(){
    return this.seats;
  }

}

