import { Injectable } from '@angular/core';
import { BookingTicket } from '../BookingTicket/BookingTicket';
import { Passenger } from '../passenger/Passenger';

@Injectable({
  providedIn: 'root'
})
export class BookingTicketService {

  constructor() { }

  getUserBookingData(name: string, emailAddress: string, passengersList:Passenger[], seatNumbersList:number[], travellingDate:Date) {
    const booking = new BookingTicket();
    booking.setUserName(name);
    booking.setEmail(emailAddress);
    booking.setPassengers(passengersList);
    booking.setSeatNumbers(seatNumbersList);
    booking.setTravellingDate(travellingDate);

    return booking;

  }
}
