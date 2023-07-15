import Friends from "./components/Friends.jsx";
import FormAddFriend from "./components/FormAddFriend.jsx";

const friends = [
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

  return (
    <div className="app">
        <div className="sidebar">
            <Friends friends={friends}/>
            <FormAddFriend />
        </div>
    </div>
  )
}

export default App
