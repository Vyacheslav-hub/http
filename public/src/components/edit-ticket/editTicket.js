import {changeTicket} from "../../js/services/ticketsService.js";

export const editTicket = () => {
    const form = document.querySelector('.ticket-form--edit');
    const cancelButton = form.querySelector('.ticket-form__button--cancel');
    const textarea = form.querySelector('textarea[name="description"]');
    const submitButton = form.querySelector('.ticket-form__button--submit');
    const errorElement = form.querySelector('.ticket-form__error');

    const resetTextareaHeight = () => {
        textarea.style.height = 'auto';
    };

    cancelButton.addEventListener('click', () => {
        form.reset();
        resetTextareaHeight();
        form.hidden = true;
        errorElement.hidden = true;
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        submitButton.disabled = true;
        errorElement.hidden = true;

        const formData = new FormData(form);

        const name = formData.get('name');
        const description = formData.get('description');

        const id = form.dataset.ticketId;

        try {
            await changeTicket(id, name, description);

            form.reset();
            resetTextareaHeight();
            form.hidden = true;

            const ticketElement = document.getElementById(id);

            const titleElement = ticketElement.querySelector('.ticket__title');

            titleElement.textContent = name;

            const descriptionElement = ticketElement.querySelector('.ticket__description');

            if (descriptionElement) {
                descriptionElement.textContent = description;
            }
        }catch (error) {
            console.error(error);
            errorElement.textContent = 'Не удалось изменить тикет';
            errorElement.hidden = false;
        }finally {
            submitButton.disabled = false;
        }
    });

    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    });
};
