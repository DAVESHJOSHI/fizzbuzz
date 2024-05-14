function processArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    const results = [];

    arr.forEach(item => {
        if (typeof item !== 'number') {
            results.push({
                input: item,
                output: 'Invalid Item'
            });
        } else {
            let output;
            const log = [`Divided ${item} by 3`, `Divided ${item} by 5`];

            if (item % 3 === 0 && item % 5 === 0) {
                output = 'FizzBuzz';
            } else if (item % 3 === 0) {
                output = 'Fizz';
            } else if (item % 5 === 0) {
                output = 'Buzz';
            } else {
                output = item;
            }

            results.push({
                input: item,
                output: output,
                log: log
            });
        }
    });

    return results;
}

module.exports = processArray;
