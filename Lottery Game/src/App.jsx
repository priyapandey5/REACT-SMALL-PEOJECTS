import { useState } from 'react'
import './App.css'
import Ticket from './Ticket';
import Lottery from './Lottery';
import {sum} from "./helper";

function App() {
  let winCondition = (ticket) => {
    // return ticket[0] ===0;
    return ticket.every((num) => num === ticket[0]);
  };

  return (
    <>
    <Lottery n={3} winCondition={winCondition}/>
    </>
  );
}

export default App;

/* /* <TicketNum num={5}/>
      <TicketNum num={5}/>
      <TicketNum num={5}/> 
      <Ticket ticket={[1,2,3]} />
      <Ticket ticket={[1,2,3,4,5]} />*/ 