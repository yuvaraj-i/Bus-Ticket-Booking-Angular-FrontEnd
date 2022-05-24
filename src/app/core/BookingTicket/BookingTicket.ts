import { Passenger } from "../passenger/Passenger";

export class BookingTicket {
    private userName!: string;
    private email!: string;
    private passengers!: Passenger[];
    private seatNumbers!: number[];
    private travelingDate!: Date;

    BookingTicket(userName: string, email: string, passengers: Passenger[], seatNumbers: number[], travelingDate: Date) {
        this.userName = userName;
        this.email = email;
        this.passengers = passengers;
        this.seatNumbers = seatNumbers;
        this.travelingDate = travelingDate;
    }


    setUserName(userName: string) {
        this.userName = userName;
    }

    setEmail(email: string) {
        this.email = email;
    }

    setPassengers(passengersList: Passenger[]) {
        this.passengers = passengersList;
    }

    setSeatNumbers(seatNumbersList: number[]) {
        this.seatNumbers = seatNumbersList;
    }

    setTravellingDate(travelingDate:Date) {
        this.travelingDate = travelingDate;
    }

}