import { Component, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seat } from '../core/Seat/Seat';
import { BusService } from '../core/services/bus.service';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-seat-display',
  templateUrl: './seat-display.component.html',
  styleUrls: ['./seat-display.component.scss']
})

export class SeatDisplayComponent implements OnInit {

  bus!: any;
  avaliableSeatCounts!: Number;
  seatsStatus: Array<Seat> = [];
  lastRows: Array<Seat> = [];
  seatSelect: Boolean = true ;
  seatsArray: Array<number> = [];
  price!: number;
  busId!: any;

  constructor(private busService: BusService, private httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  calculateCharge(seatAmount:number) {
    this.price = this.seatsArray.length * seatAmount;
  }

  seatSelected(seatNumber: number) {
    
    if (this.seatsArray.length == 6) {
      alert("maximun only 6 seats can be booked")
      return;
    }

    if (this.seatsArray.includes(seatNumber)) {
      this.seatsArray = this.seatsArray.filter((seatsValue) => {
        return seatsValue != seatNumber;
      })
      this.calculateCharge(this.bus.seatPrice);
    }

    else {
      this.seatsArray.push(seatNumber);
      this.calculateCharge(this.bus.seatPrice);
    }


    sessionStorage.setItem("selectedSeats", this.seatsArray.toString());
    sessionStorage.setItem("price", this.price.toString());

  }



  setSeatStatus() {
    // let val = document.getElementsByTagName("img");
    // // console.log(val[0].addEventListener("click", this.seatSelected(val[0].getAttribute("accaccessKeye"))));
    // console.log(val);

    // for(let i:number = 1; i < val.length; i++){
    //   val[i].setAttribute("accessKey", i.toString());

    // }
  }

  selectSeats() {
    this.router.navigate(["/bus/booking", this.busId.id]);
  }



  ngOnInit(): void {


    // let val = sessionStorage.getItem("selectedSeats")?.split(",");

    // if(val != undefined) {
    //   this.seatsArray = val;
    //   console.log(val);
      
    // }
    

    this.route.params.subscribe(params => {
      this.busId = params;

    })

    this.httpService.getRequestToBus(this.busId.id).subscribe(
      {
        next: (response) => {
          this.bus = response;
          // console.log(this.bus);
        },

        error: (error) => {
          console.log(error);
        }
      });

    this.bus = this.busService.getAllBusesByLocation();

    this.httpService.getBusSeatsAvaliablity(this.busId.id).subscribe(
      {
        next: (response) => {
          // console.log(response);
          this.avaliableSeatCounts = response.seatAvaliable;
          this.seatsStatus = response.results.slice(0, -5);
          // console.log(this.seatsStatus);
          this.lastRows = response.results.slice(-5);          
        },

        error: (error) => {
          console.log(error.error);
        }
      })

    this.avaliableSeatCounts = 20;

    // for (let i = 1; i <= 10; i++) {
      
    //   const seat = {"seatNumber": i, "avaliable": true}
    //   this.seatsStatus.push(seat)
    // }


    // for (let i = 1; i <= 5; i++) {

    //   const seat = {"seatNumber": i, "avaliable": true}
    //   this.lastRows.push(seat)
    // }
  }


}
