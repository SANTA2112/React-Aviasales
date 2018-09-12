const API_URL = '/src/';

const getJSON = (...args) => fetch(...args).then(r => r.json());

export const getAllTickets = () => getJSON(`${API_URL}data.json`).then(tickets => tickets.sort((c, n) => c.price - n.price));
