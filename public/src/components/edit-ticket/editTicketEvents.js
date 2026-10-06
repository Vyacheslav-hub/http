import { getTicketById } from "../../js/services/ticketsService.js";


export const editTicketEvents = (element, id) => {
    const form = document.querySelector('.ticket-form--edit');

    element.addEventListener('click', async () => {
        const ticket = await getTicketById(id);

        form.dataset.ticketId = id;

        const nameInput = form.querySelector('input[name="name"]');
        const descriptionInput = form.querySelector('textarea[name="description"]');

        nameInput.value = ticket.name;
        descriptionInput.value = ticket.description;

        form.hidden = false;
    });
};
