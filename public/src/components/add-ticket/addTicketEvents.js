import {addTicket} from "./addTicket.js";

export const addTicketEvents = () => {
    const addButton = document.querySelector('.help-desk__button');
    const form = document.querySelector('.ticket-form--add');
    const textarea = form.querySelector('#ticket-description');
    const cancelButton = document.querySelector('.ticket-form__button--cancel');
    const submitButton = document.querySelector('.ticket-form__button--submit');
    const errorElement = document.querySelector('.ticket-form__error');

    const resetTextareaHeight = () => {
        textarea.style.height = 'auto';
    };

    addButton.addEventListener('click', () => {
        form.hidden = false;
        resetTextareaHeight();
    });

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
        try {
            await addTicket(name, description);

            form.reset();
            resetTextareaHeight();
            form.hidden = true;
        }catch (error) {
            console.error(error);
            errorElement.textContent = 'Не удалось создать тикет';
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
