
export class Passenger{
    private name!:string;
    private gender!:string;

    constructor() {}

    getName(){
        return this.name;
    }

    getGender() {
        return this.gender;
    }

    setName(name:string) {
        this.name = name; 
    }

    setGender(gender:string) {
        this.gender = gender;
    }
}