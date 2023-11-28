function generateTicket() {
    const nameInput = document.getElementById('nameInput');
     const viewTicket = document.getElementById("view");
    // Check if a name is entered
    if (nameInput.value.trim() === '') {
        alert('Please enter a name.');
        return;
    }

    // Generate a random 8-digit number
    const ticketNumber = Math.floor(10000000 + Math.random() * 90000000);

    // Save the name and ticket number to local storage
    localStorage.setItem(ticketNumber.toString(), nameInput.value);

   // Display a success message
    alert(`Ticket generated successfully!\nName: ${nameInput.value}\nTicket Number: ${ticketNumber}`);
    
    // Clear the input field
    nameInput.value = '';

   

const ticket =  localStorage.getItem(ticketNumber, nameInput.value);



 


}
