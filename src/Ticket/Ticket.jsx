import React from 'react';
import { Arrow, Button, BuySection, City, Date, Info, InfoBlock, Item, Logo, Span, Time, Transplantation } from "./styled";

export default ({ ticket, curr }) => {
  const convertStops = () => ticket.stops === 1 ?  ticket.stops + ' Пересадка' : ticket.stops + ' Пересадки';

  const convertCurr = () => {
    const currencyType =  [
      { valuta: 'RUB', value: ticket.price, icon: '₽' },
      { valuta: 'USD', value: Math.round(ticket.price / 69), icon: '$' },
      { valuta: 'EUR', value: Math.round(ticket.price / 80), icon: '€' }
    ];
    return currencyType.filter(el => el.valuta === curr).pop();
  }

  return (
    <Item>
      <BuySection>
        <Logo />
        <Button>Купить за { convertCurr().value } <Span>{ convertCurr().icon }</Span>​</Button>
      </BuySection>
      <InfoBlock>
        <Info rigth>
          <Time>{ ticket.departure_time }</Time>
          <City>{ ticket.origin }, { ticket.origin_name }</City>
          <Date>{ ticket.departure_date }</Date>
        </Info>
        {ticket.stops > 0 && <Transplantation>{ convertStops() }</Transplantation>}
        <Arrow />
        <Info>
          <Time>{ ticket.arrival_time }</Time>
          <City>{ ticket.destination }, { ticket.destination_name }</City>
          <Date>{ ticket.arrival_date }</Date>
        </Info>
      </InfoBlock>
    </Item>
  );
};
