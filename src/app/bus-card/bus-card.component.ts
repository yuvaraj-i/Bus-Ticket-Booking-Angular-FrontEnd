import { Component, OnInit } from '@angular/core';
import { BusService } from '../core/services/bus.service';

@Component({
  selector: 'app-bus-card',
  templateUrl: './bus-card.component.html',
  styleUrls: ['./bus-card.component.scss']
})


export class BusCardComponent implements OnInit {

  bus:any;

  constructor(private busServices:BusService) { }

  ngOnInit(): void {

    this.bus = this.busServices.getAllBusesByLocation();
  }

}
