import {createDescription} from "./createDescription.js";
import {getTicketById, updateTicket} from "../../js/services/ticketsService.js";
import {editStatus} from "./ticketSatus.js";

export const addTicketEvents = (element, id) => {
    element.addEventListener('click', async (e) => {
        const ticketBody = e.target.closest('.ticket__body');
        if (!ticketBody) return;

        const descriptionElement = element.querySelector('.ticket__description');

        if (descriptionElement) {
            descriptionElement.remove();
            return;
        }

        const ticketById = await getTicketById(id);

        if (ticketById.description === '') return;

        element.append(createDescription(ticketById));
    })

    element.addEventListener('click', async (e) => {
        const completeButton = e.target.closest('.ticket__button--complete');

        if (!completeButton) return;

        const currentStatus = element.dataset.status === 'true';
        const newStatus = !currentStatus;

        await updateTicket(id, newStatus);

        element.dataset.status = newStatus;

        editStatus(completeButton, newStatus);
    });
};
