import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-location-view-page',
  templateUrl: './location-view-page.component.html',
  styleUrls: ['./location-view-page.component.scss']
})
export class LocationViewPageComponent implements OnInit {

  locations!:Array<string>;

  constructor(private httpService:HttpService) { }


  deleteData(location:string) {
    this.httpService.deleteRequestLocation(location).subscribe({
      next: (response) => {
        this.locations = this.locations.filter((element) => {
          return element != location;
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

    this.httpService.getAllLocataionRequest().subscribe({
      next: (response) => {
        this.locations = response.results;
      },
      error: (error) => {
        console.log(error);
        console.log(error.message);

      }
    })
  }

}
