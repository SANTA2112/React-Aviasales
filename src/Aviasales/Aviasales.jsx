import React, { Component } from 'react';
import { Wrap } from "./styled";
import { getAllTickets } from "../API";

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
        {tickets.length > 0 && <div>{tickets[0].origin_name}</div>}
      </Wrap>
    );
  }
}

export default Aliasales;
