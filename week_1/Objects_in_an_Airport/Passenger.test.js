const Bag = require('./Bag');
const Passenger = require('./Passenger')

describe('Passenger data types', () => {

    //Passenger name is of type string
    test('Passenger name should be of type string', () => {
        //create instance of class
        const passenger1 = new Passenger('Jack', 'Passport737', '64A');
        //Expect name of passenger 1 to be string
        expect(typeof passenger1.name).toBe('string');
    })

    //Passport number is of type string
    test('Passport number should be of type string', () => {
        //create instance of class
        const passenger2 = new Passenger('Frank', 'Passport247', '82B');
        //Expect passport number of passenger 2 to be string
        expect(typeof passenger2.passportNumber).toBe('string');
    })

    //Seat number is of type string
    test('Seat number should be of type string', () => {
        //create instance of class
        const passenger3 = new Passenger('Adam', 'Passport927', '23C');
        //Expect name of passenger 1 to be string
        expect(typeof passenger3.seatNumber).toBe('string');
    })
        
})

describe('addBag should add the correct datatype and number of elements', () => {

    //Correct number of bags should be added to the array
    test('Bag array of passenger should be a length of 1', () => {
        const passenger4 = new Passenger('Alexa', 'Passport998', '20D');
        const bag1 = new Bag(20);
        passenger4.addBag(bag1);
            //Expect bags of length to be 1
            expect(passenger4.bags.length).toBe(1);
    })

    test('Bag array of passenger should be a length of 50', () => {
        const passenger5 = new Passenger('George', 'Passport123', '28D');
        for(let i = 1; i <= 50; i++){
            passenger5.addBag(new Bag(i));
        }
            //Expect 50 bags
            expect(passenger5.bags.length).toBe(50);
    })

    test('Data type of bag should be "object"', () => {
        const passenger6 = new Passenger('Luke', 'Passport281', '32D');
        const bag2 = new Bag(20);
        passenger6.addBag(bag2);
            //Expect bag data type to be objest
            expect(typeof passenger6.bags).toBe('object');
    })
})
