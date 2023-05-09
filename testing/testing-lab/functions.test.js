const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions');

test(returnTwo, () => {
    expect(returnTwo()).toBe(2)
});

test('greeting', () => {
    expect(greeting('James')).toEqual('Hello, James')
    expect(greeting('Jill')).toEqual('Hello, Jill')
});

describe('Mathematical test', () => {

    test('add', () => {
        expect(add(1, 2)).toEqual(3)
        expect(add(5, 9)).toEqual(14)
    });

    test('multiply', () => {
        expect(multiply(1, 2)).toEqual(2)
        expect(multiply(5, 9)).toEqual(45)
    });

    test('divide', () => {
        expect(divide(12, 2)).toEqual(6)
        expect(divide(15, 3)).toEqual(5)
    });

    test('subtract', () => {
        expect(subtract(12, 2)).toEqual(10)
        expect(subtract(15, 3)).toEqual(12)
    })
})