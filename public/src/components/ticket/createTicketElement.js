import {editStatus} from "./ticketSatus.js";
import "./style.css"
import {addTicketEvents} from "./ticketEvents.js";
import {formatDate} from "./formatDate.js";
import {editTicketEvents} from "../edit-ticket/editTicketEvents.js";
import {removeTicketEvents} from "../remove-ticket/removeTicketEvents.js";

export const createTicketElement = (ticket) => {
        const li = document.createElement('li');
        li.id = ticket.id;
        li.classList.add('ticket');
        li.dataset.status = ticket.status;

        const divRow = document.createElement('div');
        divRow.classList.add('ticket__row');

        const divBody = document.createElement('div');
        divBody.classList.add('ticket__body');

        const h3 = document.createElement('h3');
        h3.classList.add('ticket__title');
        h3.textContent = ticket.name;

        const time = document.createElement('time');
        const date = formatDate(ticket.created);

        time.classList.add('ticket__date');
        time.dateTime = date.datetime;
        time.textContent = date.text;

        divBody.append(h3, time);

        const divActions = document.createElement('div');
        divActions.classList.add('ticket__actions');

        const buttonEdit = document.createElement('button');
        buttonEdit.classList.add('ticket__button','ticket__button--edit');
        buttonEdit.type = 'button';
        buttonEdit.ariaLabel = 'Редактировать тикет';
        buttonEdit.textContent = '✎';

        const buttonRemove = document.createElement('button');
        buttonRemove.classList.add('ticket__button','ticket__button--remove');
        buttonRemove.type = 'button';
        buttonRemove.ariaLabel = 'Удалить тикет';
        buttonRemove.textContent = '❌';

        const buttonComplete = document.createElement('button');
        buttonComplete.classList.add('ticket__button','ticket__button--complete');
        buttonComplete.type = 'button';
        buttonComplete.ariaLabel = 'Завершить тикет';

        divRow.append(buttonComplete, divBody, divActions);

        addTicketEvents(li, ticket.id);

        editTicketEvents(buttonEdit, ticket.id);

        removeTicketEvents(buttonRemove, ticket.id);

        editStatus(buttonComplete, ticket.status);

        divActions.append(buttonEdit, buttonRemove);

        li.append(divRow);

        return li;
}
