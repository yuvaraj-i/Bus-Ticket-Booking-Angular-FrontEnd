import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-add-new-bus-page',
  templateUrl: './add-new-bus-page.component.html',
  styleUrls: ['./add-new-bus-page.component.scss']
})
export class AddNewBusPageComponent implements OnInit {

  private busDetailsList: NgForm[] = [];
  locations!:string[];

  constructor(private httpService: HttpService) { }

  submitBusData(busDetails: NgForm) {
    if (busDetails.valid) {
      console.log(busDetails);
      this.busDetailsList.push(busDetails.value)
      this.httpService.postNewBusDetails(this.busDetailsList).subscribe((data) => {
        console.log(data);
        busDetails.resetForm();
        
      });
    }
  }

  ngOnInit(): void {

    this.httpService.getAllLocataionRequest().subscribe({
      next: (data) => {
        this.locations = data.results;
      },

      error: (error) => {
        console.log(error.error);

        if(error.status == 403) {
          this.httpService.sendLogout();
        }
        
      }
    })
  }

}
