import Friends from "./components/Friends.jsx";
import FormAddFriend from "./components/FormAddFriend.jsx";
import Button from "./components/Button.jsx";
import {useState} from "react";
import FormSplitBill from "./components/FormSplitBill.jsx";

const initialFriends = [
    {
        id: 118836,
        name: "Noman",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },

    {
        id: 234524,
        name: "Mehar",
        image: "https://i.pravatar.cc/48?u=499477",
        balance: 40,
    },
];

function App() {
    const [showAddFriend, setShowAddFriend] = useState(false)
    const [friends, setFriends] = useState(initialFriends)
    const [selectedFriend, setSelectedFriend] = useState(null)

    function handleShowAddFriend() {
        setShowAddFriend(prev => !prev)
    }

    function handleAddFriend(friend) {
        setFriends(prev=> ([...prev, friend]))
    }

    function handleDeleteFriend(id) {
        setFriends(prevFriends=> prevFriends.filter(friend => friend.id !== id))
    }

    function handleSelectFriend(friend) {
        setSelectedFriend(prev => prev?.id === friend.id ? null : friend )
        setShowAddFriend(false)
    }

    function handleSplitBill(value) {
        setFriends(friends=> friends.map(friend=> (friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value} : friend) ))
        setSelectedFriend(null)
    }

  return (
    <div className="app">
        <div className="sidebar">
            <Friends friends={friends} selectedFriend={selectedFriend} onDelete={handleDeleteFriend} onSelectFriend={handleSelectFriend}/>
            {showAddFriend && (
                <FormAddFriend onAdd={handleAddFriend}/>
            )}
            <Button onClick={handleShowAddFriend}>{!showAddFriend ? "Add Friend" : "Close"}</Button>
        </div>

        {selectedFriend && (
            <FormSplitBill key={selectedFriend.id} selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>
        )}
    </div>
  )
}

export default App
