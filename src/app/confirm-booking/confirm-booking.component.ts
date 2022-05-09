import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.scss']
})
export class ConfirmBookingComponent implements OnInit {

  numberOfPassengers:number = 1;
  selectedSeats = [1, 2, 3];
  totalPrice = 1000;
  constructor() { }

  ngOnInit(): void {
  }

}
