import {deleteTicket} from "../../js/services/ticketsService.js";

export const removeTicket = () => {
    const form = document.querySelector('.ticket-form--remove');
    const cancelButton = form.querySelector('.ticket-form__button--cancel');
    const submitButton = form.querySelector('.ticket-form__button--submit');
    const errorElement = form.querySelector('.ticket-form__error');

    cancelButton.addEventListener('click', () => {
        form.hidden = true;
        errorElement.hidden = true;
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        submitButton.disabled = true;
        errorElement.hidden = true;

        const id = form.dataset.ticketId;

        try {
            await deleteTicket(id);

            form.hidden = true;

            const ticketElement = document.getElementById(id);

            ticketElement.remove();
        }catch (error) {
            console.error(error);
            errorElement.textContent = 'Не удалось удалить тикет';
            errorElement.hidden = false;
        }finally {
            submitButton.disabled = false;
        }
    });
}
