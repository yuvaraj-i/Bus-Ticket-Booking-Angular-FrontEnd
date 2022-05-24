import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-search-location-form',
  templateUrl: './search-location-form.component.html',
  styleUrls: ['./search-location-form.component.scss']
})
export class SearchLocationFormComponent implements OnInit {

  boardingError: Boolean = false;
  destinationError: Boolean = false;
  dateError: Boolean = false;
  // selectedLocation:string = "";
  locations!: Array<string>;
  deletedLocation: Array<string> = [];

  constructor(private router: Router, private httpService: HttpService) { }

  setErrorStatus(boarding: Boolean, destination: Boolean, date: Boolean) {
    this.boardingError = boarding;
    this.destinationError = destination;
    this.dateError = date;
  }

  submitSearchDetails(searchLocationDetails: NgForm) {

    if (searchLocationDetails.invalid) {
      this.setErrorStatus(true, true, true);
      return
    }

    // console.log(searchLocationDetails.value);
    this.setErrorStatus(false, false, false);

    this.router.navigate(
      ["search/bus"],
      {
        queryParams:
          { from: searchLocationDetails.value.boardingLocation, to: searchLocationDetails.value.destinationLocation, date: searchLocationDetails.value.boardingDate }
      });

    searchLocationDetails.resetForm();
  }

  setboardingLocation(location: NgModel) {
    let selectedLocation = location.value;

    // if(this.deletedLocation != "") {
    // this.deletedLocation.push(location.value)
    // }

    // this.locations = this.locations.filter((value) => {
    // return value != selectedLocation;
    // })

    // if(location.value == "") {
    // console.log(this.deletedLocation);
    // this.locations.concat(this.deletedLocation);
    // }
  }

  ngOnInit(): void {

    this.httpService.getAllLocataionRequest().subscribe({
      next: (response) => {
        this.locations = response.results;
      },
      error: (error) => {
        // console.log(error);
        console.log(error.message);

        if(error.status == 403) {
          this.httpService.sendLogout();
        }

      }
    })

    // console.log(this.LocationResponse.results);

  }

}
