export const editStatus = ( buttonComplete, status ) => {
    if (status === true) {
        buttonComplete.textContent = '✅';
        buttonComplete.ariaLabel = 'Вернуть тикет';
    }else {
        buttonComplete.textContent = '◯';
        buttonComplete.ariaLabel = 'Завершить тикет';
    }
}
