/* eslint-disable react/prop-types */
import Button from "./Button.jsx";

export default function FormSplitBill({selectedFriend}) {
    return(
        <form className="form-split-bill">
            <h2>split bill with {selectedFriend?.name}</h2>

            <label htmlFor="bill">💰 Bill value</label>
            <input type="text" id="bill" name="bill"/>

            <label htmlFor="expense">🕴️ Your expense</label>
            <input type="text" id="expense" name="expense"/>

            <label>🧑🏼‍🤝‍🧑🏼 {selectedFriend?.name}&apos;s expense</label>
            <input type="text" disabled/>

            <label>🤑 Who is paying the bill?</label>
            <select>
                <option value="user">You</option>
                <option value="friend0">{selectedFriend?.name}</option>
            </select>

            <Button>Pay Bill</Button>
        </form>
    )
}