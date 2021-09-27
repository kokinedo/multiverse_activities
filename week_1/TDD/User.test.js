const User = require('./User')

//Write tests in suites -> each suite should test for a certain grouping
describe('User Class Datatypes', () =>{
    //username is a type of string
    test('Username should be of type string', () => {
        //create an instance of the class
        const testUser = new User('testUser', 'thisIsAPassword', 'cohort@gmail.com', 30)
        //testUser = {
        //     username: 'openCohort123'
        //     passsword: 'thisIsAPassword'
        //     email: 'cohort@gmail.com'
        //     age: '30'
        // }
        //expect ->
        expect(typeof testUser.username).toBe('string')
    })

    //password
    test('Password should be of type string', () => {
        //create an instance of the class
        const testUser2 = new User('testUser2', 'thisMightBeAPassword', 'cohort2@gmail.com', 23)
        //testUser2 = {
        //     username: 'openCohort321'
        //     passsword: 'thisMightBeAPassword'
        //     email: 'cohort2@gmail.com'
        //     age: '23'
        // }
        //expect ->
        expect(typeof testUser2.password).toBe('string')
    })

    //email
    test('Email should be of type string', () => {
        //create an instance of the class
        const testUser3 = new User('testUser3', 'thisIsAPassword', 'cohort@gmail.com', 30)
        //expect ->
        expect(typeof testUser3.email).toBe('string')
    })

    //age
    test('Age should be of type number', () => {
        //create an instance of the class
        const testUser4 = new User('testUser4', 'thisIsAPassword', 'cohort@gmail.com', 30)
        //expect ->
        expect(typeof testUser4.age).toBe('number')
    })

    //favoriteTech
    test('FavoriteTech should be of type array', () => {
        //create an instance of the class
        const testUser5 = new User('testUser5', 'thisIsAPassword', 'cohort@gmail.com', 30)
        //expect ->
        expect(Array.isArray(testUser5.favTech)).toBe(true)
    })
})

//checkAge suites
describe("checkAge should return the correct values", () => {
    //True test case for checkAge function
    test('"testUser6" should result in "true"', () => {
    //create an instance of the class
    const testUser6 = new User('testUser6', 'thisIsAPassword', 'cohort@gmail.com', 30)
    //create mockFunction
    const mockFn = function(user) {
        let age = user.age;
        if (age >= 18 && age < 75) {
            return true;
        } else {
            return false;
        }
    }
    //expect ->
      expect(mockFn(testUser6)).toBe(true);
    });

    //False test case for checkAge function
    test('"testUser7" should result in "false"', () => {
        //create an instance of the class
        const testUser7 = new User('testUser7', 'thisIsAPassword', 'cohort@gmail.com', 111)
        //create mockFunction
        const mockFn1 = function(user) {
            let age = user.age;
            if (age >= 18 && age < 75) {
                return true;
            } else {
                return false;
            }
        }
        //expect ->
          expect(mockFn1(testUser7)).toBe(false);
        });
});

//addTech suites
describe('addTech should add the correct values to the favorite tech array', () => {
    
    //Test case for addTech function
    test('The correct value has been added to the array', () => {
        const testUser8 = new User('testUser8', 'thisIsAPassword', 'cohort@gmail.com', 30)
        const mockFn2 = function(technology) {
            testUser8.favTech.push(technology)
        }
        expect(testUser8.favTech[0].toBe('string'));
    })
});