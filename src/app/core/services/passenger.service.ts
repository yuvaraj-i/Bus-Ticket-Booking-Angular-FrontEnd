import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Passenger } from '../passenger/Passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  constructor() { }

  getPassengersData(name: string, gender: string) {

    const passenger = new Passenger();
    passenger.setName(name);
    passenger.setGender(gender);

    return passenger;

  }

}
