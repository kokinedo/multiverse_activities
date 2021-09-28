class Plane {
    constructor(type){
        this.type = type;
        this.passenger = [];
    }

    board(Passenger){
        this.passenger.push(Passenger);
    }
}

module.exports = Plane;