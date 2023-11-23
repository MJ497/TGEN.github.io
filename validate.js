function validateTicket() {
    const numberInput = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');

    // Check if a ticket number is entered
    if (numberInput.value.trim() === '') {
        alert('Please enter a ticket number.');
        return;
    }

    // Retrieve the name from local storage based on the entered ticket number
    const name = localStorage.getItem(numberInput.value);

    if (name) {
        // Display the result
        resultDiv.innerHTML = `<p><strong>Name:</strong> ${name}</p>`;
    } else {
        // Display an error message
        resultDiv.innerHTML = '<p><strong>Error:</strong> Invalid ticket number.</p>';
    }

    // Clear the input field
    numberInput.value = '';
}
