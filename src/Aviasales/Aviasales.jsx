import React, { Component } from 'react';
import { Wrap } from "./styled";
import { getAllTickets } from "../API";
import TicketsList from '../TicketsList/';
import Sidebar from '../Sidebar/';

class Aliasales extends Component {
  state = {
    tickets: [],
    curr: 'RUB',
    filterType: [-1],
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    getAllTickets().then(tickets => this.setState({ tickets }))
  }

  takeCurr = curr => this.setState({ curr });

  takeFilter = e => {
    const value = +e.target.value;

    if (this.state.filterType.includes(value))
      this.setState(p => ({ filterType: p.filterType.filter(el => el != value) }));

    else this.setState(p => ({ filterType: [...p.filterType, value] }));
  }

  takeOnlyOneFilterType = filterType => this.setState({ filterType })

  getFiltered = () => {
    const { filterType, tickets } = this.state;

    return filterType.length === 0 || filterType.includes(-1)
      ? tickets
      : filterType.reduce((all, current) => [...all, ...tickets.filter(el => el.stops === current)], [])
        .sort((a, b) => a.price - b.price);
  }

  render() {
    const { tickets, curr, filterType } = this.state;

    return (
      <Wrap>
        <Sidebar takeCurr={this.takeCurr} takeFilter={this.takeFilter} takeOnlyOneFilterType={this.takeOnlyOneFilterType} curr={curr} filterType={filterType}/>
        {tickets.length > 0 && <TicketsList tickets={this.getFiltered()} curr={curr}/>}
      </Wrap>
    );
  }
}

export default Aliasales;
