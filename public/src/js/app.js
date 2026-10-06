import "../css/style.css";
import {getTickets} from "./services/ticketsService.js";
import {createTicketElement} from "../components/ticket/createTicketElement.js";
import '../components/add-ticket/addTicket.js'
import {editTicket} from "../components/edit-ticket/editTicket.js";
import {removeTicket} from "../components/remove-ticket/removeTicket.js";

try {
    const helpDeskTickets = document.querySelector(".help-desk__tickets");
    const tickets = await getTickets();
    console.log(tickets);

    tickets.forEach(ticket => {
        const ticketElement = createTicketElement(ticket);
        helpDeskTickets.appendChild(ticketElement);
    });

    editTicket();
    removeTicket();
}catch(e) {
    console.error(e);
}
