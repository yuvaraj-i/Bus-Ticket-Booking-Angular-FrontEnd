import { Seat } from "../Seat/Seat";

export interface SeatData {
    busId:number;
    results:Seat[];
    seatAvaliable:number;
    totalBusSeats:number;

}