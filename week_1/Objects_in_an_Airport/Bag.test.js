const { expect } = require('@jest/globals');
const Bag = require('./Bag');

describe('Object data types and error handling for class Bag', () => {
    //Make sure data type of weight is a number
    test('Bag.weight should be a type of number', () => {
        const bag10 = new Bag(20);
        expect(typeof bag10.weight).toBe('number');
    })
    //Make sure error is thrown when there is no placeholder for weight
    test('Bag.weight throw an error when no value is in place', () => {
        expect(() => new Bag()).toThrowError('Bag needs a weight!');
    })    
})

describe('isOverLimit function should return the correct boolean value of true', () => {
    //Boolean value should be true when under limit
    test('isOverLimit() should return true', () => {
        const bag12 = new Bag(50);
        expect(bag12.isOverLimit()).toBe(true);
    })
})

describe('isOverLimit function should return the correct boolean value of false', () => {
    //Boolean value should be false when over limit
    test('isOverLimit() should return false', () => {
        const bag13 = new Bag(200);
        expect(bag13.isOverLimit()).toBe(false);
    })
})