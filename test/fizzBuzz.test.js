// Import the function from fizzBuzz.js
const fizzBuzz = require('./fizzBuzz');

// Describe the test suite for fizzBuzz.js
describe('FizzBuzz Logic', () => {
    // Test case for generating FizzBuzz numbers
    it('should generate FizzBuzz numbers correctly', () => {
        // Define the limit and expected FizzBuzz numbers
        const limit = 15;
        const expectedOutput = [
            '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz',
            '11', 'Fizz', '13', '14', 'FizzBuzz'
        ];

        // Call the fizzBuzz function with the limit
        const result = fizzBuzz(limit);

        // Check if the result matches the expected output
        expect(result).toEqual(expectedOutput);
    });

    // Additional test cases can be added here to cover different scenarios
});
