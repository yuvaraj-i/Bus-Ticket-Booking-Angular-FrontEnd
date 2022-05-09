import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Bus } from '../core/Bus/Bus';
import { BusService } from '../core/services/bus.service';

@Component({
  selector: 'app-seat-display',
  templateUrl: './seat-display.component.html',
  styleUrls: ['./seat-display.component.scss']
})
export class SeatDisplayComponent implements OnInit{

  bus!:any;
  avaliableSeatCounts!:Number;
  seatsStatus:Array<any> = [];
  // rightColumnsSeats:Array<any> = [];
  lastRows:Array<any> = [];
  select:Boolean = false;


  seats:Array<any> = [1, 2];

  constructor(private busService:BusService) { }

  calculateCharge(){
    return 4000;
  }

  seatSelected(seatNumber:number){
    // if(this.seats.includes(seatNumber)){
    //   // let index = this.seats.indexOf(seatNumber);

    //   for (let index:number = 0; index < this.seats.length-1; index++) {
    //     if(this.seats[index] == seatNumber) {
    //       this.seats[index] = this.seats[index+1];
    //     }
    //   }
    // }
    this.seats.push(seatNumber);
    console.log(this.seats);
  }


  setSeatStatus(){
    let val = document.getElementsByTagName("img");
    // console.log(val[0].addEventListener("click", this.seatSelected(val[0].getAttribute("accaccessKeye"))));
    console.log(val);

    for(let i:number = 1; i < val.length; i++){
      val[i].setAttribute("accessKey", i.toString());
      
    }
  }


  ngOnInit(): void {

    // this.busService.getSelectedBus().subscribe(data => {
    //   // console.log(data);
    // });
    this.setSeatStatus();

    this.bus = this.busService.getAllBusesByLocation();
   
    this.avaliableSeatCounts = 25;
    
    for(let i = 1; i <= 10; i++) {      
      this.seatsStatus.push(i);
    }


    for(let i = 1; i <= 5; i++) {      
      this.lastRows.push(i);
    }
  }


}
