import {useState} from "react";
import {getTicket , sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function({n=3, winCondition }){
    let[ticket , setTicket] = useState(getTicket(n));
    // let isWinning = sum(ticket) === winningSum;
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(getTicket(n));
    };

    return(
        <div>
        <h1>Lottery Gmae!</h1>
        <p>if your Ticket has all 3 number same. You'll Won!</p>
        <Ticket ticket={ticket} />
        <Button action={buyTicket} />
        
        <h3>{isWinning && "Congratulation"}</h3>
        </div>
    );
} 
