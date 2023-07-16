/* eslint-disable react/prop-types */
import Button from "./Button.jsx";

export default function FormSplitBill({selectedFriend}) {
    return(
        <form className="form-split-bill">
            <h2>split bill with X</h2>

            <label>💰 Bill value</label>
            <input type="text"/>

            <label>🕴️ Your expense</label>
            <input type="text"/>

            <label>🧑🏼‍🤝‍🧑🏼 X&apos;s expense</label>
            <input type="text" disabled/>

            <label>🤑 Who is paying the bill?</label>
            <select>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Pay Bill</Button>
        </form>
    )
}