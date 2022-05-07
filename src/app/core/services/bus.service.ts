import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})

export class BusService {

  constructor(private httpServices:HttpService) { }

  getAllBusesByLocation(){
    // this.httpServices.getAllBusesByLocation();
    const bus = {
      name: "orange Travels",
      startTime: "11:30",
      reachingTime: "4:00",
      totalTravelHours: "6hr 0m",
      type:"sleeper",
      boardingLocation:"Coimbatore",
      destinationLocation:"Chennai",
      pickupPoint:"Gandhipuram",
      dropingPoint:"kayambedu",
      travelCharges:"400"
    }

    return bus;
  }

}

