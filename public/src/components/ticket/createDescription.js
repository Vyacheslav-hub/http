export const createDescription = (ticket) => {
    const p = document.createElement('p');
    p.classList.add('ticket__description');
    p.textContent = ticket.description;

    return p;
}
