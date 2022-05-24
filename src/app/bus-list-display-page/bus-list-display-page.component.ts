import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusService } from '../core/services/bus.service';
import { HttpService } from '../core/services/http.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-bus-list-display-page',
  templateUrl: './bus-list-display-page.component.html',
  styleUrls: ['./bus-list-display-page.component.scss']
})
export class BusListDisplayPageComponent implements OnInit {

  // name: string = " yuvaraj";
  boarding!:string;
  destination!:string;
  date!:string;
  locationParam: any;
  busesData: any = [];
  error!:boolean;

  constructor(private route: ActivatedRoute, private httpService: HttpService, private busService: BusService, private location: Location) { }

  goToBackPage() {
    this.location.back();
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.locationParam = params;
    })

    this.boarding = this.locationParam.from;
    this.destination = this.locationParam.to;
    this.date = this.locationParam.date;

    this.httpService.getRequestToSeachBusesByLocations(this.locationParam).subscribe({
      next: (response) => {
        this.busesData = response.results;
        // this.name = response.counts;
        console.log(response.counts);
      },

      error: (error) => {
        // console.log(error.error.text);
        // console.log(error.message);
        this.error = true;

        if(error.status == 403) {
          this.httpService.sendLogout();
        }

      }

    });

    // for (let i: number = 0; i < 10; i++) {
    //   this.busesData.push(this.busService.getAllBusesByLocation());

    // }





  }

}
