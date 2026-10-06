export const getTickets = async () => {
    const response = await fetch('http://localhost:7070/?method=allTickets');

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    return await response.json();
};

export const getTicketById = async (id) => {
    const response = await fetch(`http://localhost:7070/?method=ticketById&id=${id}`);

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    return await response.json();
};

export const updateTicket = async (id, status) => {
    const response = await fetch(`http://localhost:7070/?method=updateById&id=${id}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status }),
    });

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    return await response.json();
};

export const createTicket = async (name, description) => {
    const response = await fetch(`http://localhost:7070/?method=createTicket`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description }),
    });

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    return await response.json();
}

export const changeTicket = async (id, name, description) => {
    const response = await fetch(`http://localhost:7070/?method=updateById&id=${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description }),
    });

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    return await response.json();
}

export const deleteTicket = async (id) => {
    const response = await fetch(`http://localhost:7070/?method=deleteById&id=${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }
}

