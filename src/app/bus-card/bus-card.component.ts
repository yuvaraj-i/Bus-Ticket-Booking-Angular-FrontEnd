import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Bus } from '../core/Bus/Bus';
import { BusService } from '../core/services/bus.service';

@Component({
  selector: 'app-bus-card',
  templateUrl: './bus-card.component.html',
  styleUrls: ['./bus-card.component.scss']
})


export class BusCardComponent implements OnInit {

  @Input() name!:string;
  @Input() buses!:any;

  constructor(private busServices:BusService, private router:Router) { }

  selectedBus(indexOfBus:number){
    // console.log(busId);
    let bus = this.buses[indexOfBus];
    // console.log("form bus card", bus);
    this.busServices.setSelectedBus(bus);

    const selectedBus$ = of(bus);

    this.busServices.setSelectedBus(selectedBus$);

    this.router.navigate(["search/bus/seats/", bus.id]);

  }


  ngOnInit(): void {

  }

}
