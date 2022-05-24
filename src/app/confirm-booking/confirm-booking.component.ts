import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingTicket } from '../core/BookingTicket/BookingTicket';
import { Passenger } from '../core/passenger/Passenger';
import { BookingTicketService } from '../core/services/booking-ticket.service';
import { BusService } from '../core/services/bus.service';
import { HttpService } from '../core/services/http.service';
import { PassengerService } from '../core/services/passenger.service';
import { UserService } from '../core/services/user.service';
import { User } from '../core/User/User';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.scss']
})

export class ConfirmBookingComponent implements OnInit {

  numberOfPassengers: number = 1;
  selectedSeats: number[] = [];
  totalPrice = 0;
  bookingDate:Date = new Date(2000, 5, 20);
  user!: User;
  bus!: any;
  passengersList: Array<Passenger> = [];
  name: string = "";
  gender: string = "";
  busId!: any;
  userName!: string;
  email!: string;
  message!:string;

  constructor(private busServices: BusService, private userService: UserService,
    private passengerService: PassengerService, private router: Router, private httService: HttpService,
    private route: ActivatedRoute, private bookingTicketService: BookingTicketService) {

  }


  sendPassengerDetails(name: string, gender: string) {
    if (name != "" && gender != "") {
      this.passengersList.push(this.passengerService.getPassengersData(name, gender));
      // console.log(this.passengersList);
      this.name = "";
      this.gender = "";
    }

  }

  sendPassengerName(nameFormVale: NgModel) {
    if (nameFormVale.valid) {
      this.name = nameFormVale.value;
      this.sendPassengerDetails(this.name, this.gender);
    }
  }

  setPassengerGender(nameFormVale: NgModel) {
    if (nameFormVale.valid) {
      this.gender = nameFormVale.value;
      this.sendPassengerDetails(this.name, this.gender);
    }

  }

  formDetailsSubmit() {
    if (this.passengersList.length == 0) {
      return
    }

    const UserBooking: BookingTicket = this.bookingTicketService.getUserBookingData(this.userName, this.email, this.passengersList, this.selectedSeats, this.bookingDate)

    this.httService.postRequestToBookTicket(this.busId.id, UserBooking).subscribe({
      next: (data) => {
        this.message = "Thank You your ticket booking is successfull";

        sessionStorage.clear();
        setTimeout(() => {
          this.router.navigate(["/"]);
          
        }, 3000);
      },

      error:(error) => {
        if(error.status == 403) {
          this.httService.sendLogout();
        }
      }
    });

  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.busId = params;

    })

    this.bus = this.busServices.getAllBusesByLocation();
    // this.user = this.userService.getUserDetails();

    this.httService.getRequestUserDetails().subscribe({
      next: (data) => {
        // this.user = data;
        this.userName = data.name;
        this.email = data.emailAddress;
        // console.log(data);

      },

      error: (error) => {
        console.log(error);
      }
    });


    this.httService.getRequestToBus(this.busId.id).subscribe({
      next: (data) => {
        this.bus = data;
        // console.log(data);

      }
    });


    const seats = sessionStorage.getItem("selectedSeats")?.split(",");

    seats?.forEach((element) => {
      this.selectedSeats.push(parseInt(element));
    })

    let storedPrice = sessionStorage.getItem("price");

    if (storedPrice != null) {
      this.totalPrice = parseInt(storedPrice);
    }


  }

}
