import React, { Component } from 'react';
import { Wrap } from "./styled";
import { getAllTickets } from "../API";
import TicketsList from '../TicketsList/';
import Sidebar from '../Sidebar/';

class Aliasales extends Component {
  state = {
    tickets: [],
    curr: 'RUB',
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    getAllTickets().then(tickets => this.setState({ tickets }))
  }

  takeCurr = curr => this.setState({ curr });

  render() {
    const { tickets, curr } = this.state;

    return (
      <Wrap>
        <Sidebar curr={curr} takeCurr={this.takeCurr}/>
        {tickets.length > 0 && <TicketsList tickets={tickets} curr={curr}/>}
      </Wrap>
    );
  }
}

export default Aliasales;
