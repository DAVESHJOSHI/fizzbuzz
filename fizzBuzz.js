// fizzBuzz.js
function fizzBuzz(value) {
    if (typeof value !== 'number' || isNaN(value)) {
        throw new Error('Invalid input');
    }

    let result = '';

    if (value % 3 === 0) {
        result += 'Fizz';
    }

    if (value % 5 === 0) {
        result += 'Buzz';
    }

    return result || value.toString();
}

module.exports = fizzBuzz;
