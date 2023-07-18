/* eslint-disable react/prop-types */
import {useState} from "react";
import Button from "./Button.jsx";

export default function FormSplitBill({selectedFriend, onSplitBill}) {
    const [bill, setBill] = useState("")
    const [yourExpense, setYourExpense] = useState("")
    const [payingBy, setPayingBy] = useState("user")

    const friendExpense = bill ? bill - yourExpense : ""

    function handleSubmit(e) {
        e.preventDefault()
        if (!bill) return

        onSplitBill(payingBy === "user" ? friendExpense : -yourExpense)
    }

    return(
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>split bill with {selectedFriend?.name}</h2>

            <label htmlFor="bill">💰 Bill value</label>
            <input type="text" id="bill" name="bill" value={bill} onChange={(e)=> setBill(+e.target.value)}/>

            <label htmlFor="yourExpense">🕴️ Your expense</label>
            <input type="text" id="yourExpense" name="yourExpense" value={yourExpense}
                   onChange={(e)=> setYourExpense(+e.target.value > bill ? yourExpense : +e.target.value)}/>

            <label>🧑🏼‍🤝‍🧑🏼 {selectedFriend?.name}&apos;s expense</label>
            <input type="text" disabled value={friendExpense}/>

            <label>🤑 Who is paying the bill?</label>
            <select name="paying" value={payingBy} onChange={(e)=> setPayingBy(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend?.name}</option>
            </select>

            <Button type="submit">Split Bill</Button>
        </form>
    )
}