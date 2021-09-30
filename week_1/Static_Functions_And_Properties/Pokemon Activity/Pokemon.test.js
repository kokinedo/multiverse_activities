const Pokemon = require('./Pokemon')
const mockMath = Object.create(global.Math);
mockMath.random = () => 100;
global.Math = mockMath;


describe('Properties and methods in the Pokemon class return correct values and data types', () =>{
    //Name
    test('Datatype of name from constructor should be string', () => {
        const Snorlax = new Pokemon('Snorlax', 39, 'Normal', 200);
        expect(typeof Snorlax.name).toBe('string');
    })

    test('Constructor should return Bulbasaur for name', () => {
        const Bulbasaur = new Pokemon('Bulbasaur', 1,'Grass', 50);
        expect(Bulbasaur.name).toBe('Bulbasaur');
    })

    //Number
    test('Datatype of number from constructor should be number', () => {
        const Arcanine = new Pokemon('Arcanine', 59,'Fire', 120);
        expect(typeof Arcanine.number).toBe('number');
    })

    test('Constructor should return 59 for hp', () => {
        const Arcanine = new Pokemon('Arcanine', 59,'Fire', 200);
        expect(Arcanine.number).toBe(59);
    })
    
    //Type
    test('Datatype of type from constructor should be string', () => {
        const Grimer = new Pokemon('Grimer', 88, 'Poison', 70);
        expect(typeof Grimer.type).toBe('string');
    })

    test('Constructor should return Poison for the type', () => {
        const Grimer = new Pokemon('Grimer', 88, 'Poison', 70);
        expect(Grimer.type).toBe('Poison');
    })
    
    //Hp
    test('Hp datatype should be number', () => {
        const Bulbasaur = new Pokemon('Bulbasaur', 1, 'Grass', 50);
        expect(typeof Bulbasaur.hp).toBe('number');
    })

    test('Constructor should return 1 for the number', () => {
        const Bulbasaur = new Pokemon('Bulbasaur', 1, 'Grass', 50);
        expect(Bulbasaur.hp).toBe(50);
    })
    
describe('Functions of the Pokemon class should return the correct value', () => {
    test('nameIsString returns true', () => {
        expect(Pokemon.nameIsString('Krabby')).toBe(true);            
        })
    })

    test('nameIsString returns false', () => {
        expect(Pokemon.nameIsString(10)).toBe(false);
    })
    
    test('isValidType returns true', () => {
        expect(Pokemon.isValidType('Ghost|poison')).toBe(true);
    })

    test('isValidType returns false', () => {
        expect(Pokemon.isValidType('Ghos')).toBe(false);
    })

    test('isValidHp returns true', () => {
        expect(Pokemon.isValidHp(60)).toBe(true);
    })

    test('isValidHp returns false', () => {
        expect(Pokemon.isValidHp(400)).toBe(false);
    })

    test('assignType assigns Fire to the object', () => {
        Pokemon.assignType('Fire')
        expect(Pokemon.type).toBe('Fire');
    })

    test('assignType assigns Fire to the object', () => {
        Pokemon.assignType('Bug')
        expect(typeof Pokemon.type).toBe('string');
    })

    test('resetHealth reset health back to 200', () => {
        Pokemon.assignHealth(50)
        Pokemon.assignBaseHealth(200)
        Pokemon.resetHealth(Pokemon);
        expect(Pokemon.hp).toBe(200)
    })

    //Set missChance to 20 or greater
    test('Should return 176 for health after attack', () => {
        const Fearow = new Pokemon('Fearow', 1, 'Grass', 200, 200);
        Pokemon.attack(Fearow, 'Drill Peck', 24)
        expect(Fearow.hp).toBe(176)
    })
})