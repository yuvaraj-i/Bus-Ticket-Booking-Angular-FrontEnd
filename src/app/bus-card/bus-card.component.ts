import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../core/services/bus.service';

@Component({
  selector: 'app-bus-card',
  templateUrl: './bus-card.component.html',
  styleUrls: ['./bus-card.component.scss']
})


export class BusCardComponent implements OnInit {

  // any[];

  buses:Array<any> = [];

  constructor(private busServices:BusService, private router:Router) { }

  selectedBus(busId:any, indexOfBus:number){
    // console.log(busId);
    let bus = this.buses[indexOfBus];
    // console.log("form bus card", bus);
    this.busServices.setSelectedBus(bus);

    this.router.navigate(["search/bus/seats"])
  }


  ngOnInit(): void {

    for (let i:number = 0; i < 10; i++){
      this.buses.push(this.busServices.getAllBusesByLocation());
      
    }
  }

}
