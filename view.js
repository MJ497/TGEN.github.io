document.addEventListener('DOMContentLoaded', displayTickets);

function displayTickets() {
    const ticketListDiv = document.getElementById('ticketList');

    // Iterate through local storage and display each entry
    for (let i = 0; i < localStorage.length; i++) {
        const ticketNumber = localStorage.key(i);
        const name = localStorage.getItem(ticketNumber);

        const ticketEntry = document.createElement('div');
        ticketEntry.innerHTML = `<p><strong>Name:</strong> ${name}</p><p><strong>Ticket Number:</strong> ${ticketNumber}</p>`;
        ticketListDiv.appendChild(ticketEntry);
    }
}
