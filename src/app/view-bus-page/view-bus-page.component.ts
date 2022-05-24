import { Component, OnInit } from '@angular/core';
import { Bus } from '../core/Bus/Bus';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-view-bus-page',
  templateUrl: './view-bus-page.component.html',
  styleUrls: ['./view-bus-page.component.scss']
})

export class ViewBusPageComponent implements OnInit {

  allBusesList!:Array<any>;
  // count!:number;

  constructor(private httpService:HttpService) { }


  deleteData(busRegisterNumber:string) {
    this.httpService.deleteRequestBus(busRegisterNumber).subscribe({
      next: (response) => {
        this.allBusesList = this.allBusesList.filter((bus) => {          
          return bus.numberPlateDeatails != busRegisterNumber;
        })
      },

      error:(error) => {
        if(error.status == 403) {
          this.httpService.sendLogout();
        }
      }
    })
  }

  ngOnInit(): void {

    this.httpService.getAllBuses().subscribe({
      next: (response) => {
        this.allBusesList = response;
      }
    })
  }

}
