import React from 'react';
import { UList } from "./styled";
import Ticket from '../Ticket/';

export default ({ tickets, curr }) => (
  <UList>{ tickets.map(ticket => <Ticket key={ticket.price} ticket={ticket} curr={curr}/>) }</UList>
);
