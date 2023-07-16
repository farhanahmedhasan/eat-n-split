/* eslint-disable react/prop-types */
import Friend from "./Friend.jsx";
export default function Friends({friends, onDelete, onSelectFriend}) {
    return(
        <ul>
            {friends.map(friend => <Friend key={friend.id} friend={friend} onDelete={onDelete} onSelectFriend={onSelectFriend}/>)}
        </ul>
    )
}