/* eslint-disable react/prop-types */
import {useState} from "react";
import Button from "./Button.jsx";
import {generateRandomInteger} from "../helper/utils.js";

export default function FormAddFriend({onAdd}) {
    const [friend,setFriend] = useState({name:"", image:"https://i.pravatar.cc/48?u=933372"})

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value

        setFriend(prev=> ({...prev, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        onAdd({...friend, id:Date.now(), balance:0})
        setFriend({name:"", image:`https://i.pravatar.cc/48?u=933${generateRandomInteger(1,300)}`})
    }

    return(
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label htmlFor="name">🧑🏼‍🤝‍🧑🏼Friend Name</label>
            <input type="text" id="name" name="name" value={friend.name} onChange={handleChange}/>

            <label htmlFor="image">🖼️ Image URL</label>
            <input type="text" id="image" name="image" value={friend.image} onChange={handleChange} placeholder="https://i.pravatar.cc/48?u=933372"/>

            <Button>Add</Button>
        </form>
    )
}