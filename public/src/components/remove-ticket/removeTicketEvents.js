export const removeTicketEvents = (element, id) => {
    const form = document.querySelector('.ticket-form--remove');

    element.addEventListener('click', () => {
        form.dataset.ticketId = id;
        form.hidden = false;
    })
}
