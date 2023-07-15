/* eslint-disable react/prop-types */
import Button from "./Button.jsx";

export default function Friend({friend}) {
    let owes = friend.balance > 0 ? `${friend.name} owes you ${friend.balance}$`: `You owe ${friend.name} ${Math.abs(friend.balance)}$`
    owes = friend.balance === 0 ? "We are even" : owes

    let color;
    if(friend.balance > 0) color = "green"
    if(friend.balance < 0) color = "red"

    return(
        <li>
            <img src={friend.image} alt={friend.name}/>
            <h3>{friend.name}</h3>
            <p className={color}>{owes}</p>

            <div className="button-group">
                <Button btnType="primary">Select</Button>
                <Button btnType="secondary">Delete</Button>
            </div>
        </li>
    )
}