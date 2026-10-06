export const formatDate = (ticketDate) => {
    const date = new Date(ticketDate);

// Извлекаем компоненты и дополняем нулями слева, если число меньше 10
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const fullYear = date.getFullYear();
    const shortYear = String(fullYear).slice(-2);

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

// Собираем итоговую строку для отображения пользователю
    return {
        text: `${day}.${month}.${shortYear} ${hours}:${minutes}`,
        datetime: `${fullYear}-${month}-${day}T${hours}:${minutes}`,
    };
// Результат: "15.09.25 12:35"
}
