const processArray = require('./fizzBuzzController');

describe('FizzBuzz Controller Logic', () => {
    it('should process array and return FizzBuzz results', () => {
        const inputArray = [1, 3, 5, 15, 'A', 23];
        const expectedOutput = [
            { input: 1, output: '1', log: ['Divided 1 by 3', 'Divided 1 by 5'] },
            { input: 3, output: 'Fizz', log: ['Divided 3 by 3'] },
            { input: 5, output: 'Buzz', log: ['Divided 5 by 5'] },
            { input: 15, output: 'FizzBuzz', log: ['Divided 15 by 3', 'Divided 15 by 5'] },
            { input: 'A', output: 'Invalid Item' },
            { input: 23, output: '23', log: ['Divided 23 by 3', 'Divided 23 by 5'] }
        ];

        const result = processArray(inputArray);

        expect(result).toEqual(expectedOutput);
    });

    it('should handle empty array', () => {
        const inputArray = [];
        const expectedOutput = [];

        const result = processArray(inputArray);

        expect(result).toEqual(expectedOutput);
    });

    it('should handle non-array input', () => {
        const inputArray = 'not an array';
        const expectedOutput = [{ input: 'not an array', output: 'Invalid input' }];

        const result = processArray(inputArray);

        expect(result).toEqual(expectedOutput);
    });
});
