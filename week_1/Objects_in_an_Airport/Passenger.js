const Bag = require("./Bag");

class Passenger{
    constructor(name, passportNumber, seatNumber){
        this.name = name; 
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
        this.bags = [];
    }

    addBag(Bag){
        this.bags.push(Bag)
    }
}


module.exports = Passenger;