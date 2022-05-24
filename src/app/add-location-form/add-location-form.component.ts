import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-add-location-form',
  templateUrl: './add-location-form.component.html',
  styleUrls: ['./add-location-form.component.scss']
})
export class AddLocationFormComponent implements OnInit {

  locations: string[] = [];
  intialValue = "";
  totalInputs: number[] = [0];
  intialCount = 0;

  constructor(private httpService: HttpService, private router:Router) { }


  addLocation(location: NgModel) {

    if (location.value != "") {

      this.locations.push(location.value);
      // console.log(this.locations);

    }

  }

  addNewInput(location: number) {
    this.intialCount += 1;
    this.totalInputs.push(this.intialCount);
  }

  deleteForm(elementNumber: number) {
    this.totalInputs = this.totalInputs.filter((value) => {
      return value != elementNumber;
    })

    let valueAt: string = this.locations[elementNumber];
    console.log(valueAt);

    this.locations = this.locations.filter((value) => {
      return value != valueAt;
    })
  }

  submitLocationDetails() {
    if (this.locations.length == 0) {
      return
    }

    this.httpService.putRequestAddLocations(this.locations).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(["dashboard/locations"])
      },

      error:(error) => {
        if(error.status == 403) {
          this.httpService.sendLogout();
        }
      }
    });

    this.locations = [];
    this.totalInputs = [0];
    // console.log(this.intialValue);

    this.intialValue = "";
  }

  ngOnInit(): void {


  }

}
