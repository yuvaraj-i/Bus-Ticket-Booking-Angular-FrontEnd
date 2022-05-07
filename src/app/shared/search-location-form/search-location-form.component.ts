import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-location-form',
  templateUrl: './search-location-form.component.html',
  styleUrls: ['./search-location-form.component.scss']
})
export class SearchLocationFormComponent implements OnInit {

  boardingError:Boolean = false;
  destinationError:Boolean = false;
  dateError:Boolean = false;

  constructor() { }

  setErrorStatus(boarding:Boolean, destination:Boolean, date:Boolean){
    this.boardingError = boarding;
    this.destinationError = destination;
    this.dateError = date;
  }

  submitSearchDetails(searchLocationDetails:NgForm){
    
    if(searchLocationDetails.invalid){
      this.setErrorStatus(true, true, true);
      return
    }
    
    console.log(searchLocationDetails.value);
    searchLocationDetails.resetForm();
    this.setErrorStatus(false, false, false);
    


  }

  ngOnInit(): void {
  }

}
