import './style.css'
import { addTicketEvents }  from './addTicketEvents.js';
import {createTicket} from "../../js/services/ticketsService.js";
import {createTicketElement} from "../ticket/createTicketElement.js";
addTicketEvents();

export const addTicket = async (name, description) => {
    const ticket = await createTicket(name, description);
    const helpDeskTickets = document.querySelector(".help-desk__tickets");

    const ticketElement = createTicketElement(ticket);
    helpDeskTickets.appendChild(ticketElement);
};
