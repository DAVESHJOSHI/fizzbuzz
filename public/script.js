document.getElementById('submitBtn').addEventListener('click', async () => {
    const inputArray = document.getElementById('inputArray').value.split(',').map(item => {
        const parsed = Number(item.trim());
        return isNaN(parsed) ? item.trim() : parsed;
    });

    try {
        const response = await fetch('/fizzbuzz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputArray)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const results = await response.json();
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';

        results.forEach(result => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
                <p><strong>Input:</strong> ${result.input}</p>
                <p><strong>Result:</strong> ${result.output}</p>
            `;
            if (result.log) {
                result.log.forEach(log => {
                    const logP = document.createElement('p');
                    logP.textContent = log;
                    itemDiv.appendChild(logP);
                });
            }
            outputDiv.appendChild(itemDiv);
            outputDiv.appendChild(document.createElement('hr'));
        });
    } catch (error) {
        document.getElementById('output').textContent = 'Error: ' + error.message;
    }
});
