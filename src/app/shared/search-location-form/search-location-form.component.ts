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

  constructor() { }

  submitSearchDetails(searchLocationDetails:NgForm){
    
    if(searchLocationDetails.invalid){
      this.boardingError = true;
      this.destinationError = true;
      return
    }
    
    console.log(searchLocationDetails.value);
    


  }

  ngOnInit(): void {
  }

}
