import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.scss']
})
export class MyTripsComponent implements OnInit {

  userTicketBooking!: any;
  error!: boolean;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

    this.httpService.getAllTicketBooking().subscribe({
      next: (response) => {
        this.userTicketBooking = response.reverse();
      },

      error: (error) => {
        this.error = true;

        if(error.status == 403) {
          this.httpService.sendLogout();
        }
      }
    })

  }

}
