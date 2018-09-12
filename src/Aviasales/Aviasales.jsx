import React, { Component } from 'react';
import { Wrap } from "./styled";
import { getAllTickets } from "../API";
import TicketsList from '../TicketsList/';
import Sidebar from '../Sidebar/';

class Aliasales extends Component {
  state = {
    tickets: [],
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    getAllTickets().then(tickets => this.setState({ tickets }))
  }

  render() {
    const { tickets } = this.state;

    return (
      <Wrap>
        <Sidebar />
        {tickets.length > 0 && <TicketsList tickets={tickets} />}
      </Wrap>
    );
  }
}

export default Aliasales;
