import { Passenger } from "../passenger/Passenger";

export interface ConfirmBooking {
    userName:string,
    email:string,
    passengers: Passenger[],
    seatNumbers: number[]
}