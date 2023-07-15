/* eslint-disable react/prop-types */
export default function Button({children, onClick, btnType="primary"}) {
    const buttons = {
        primary: "add",
        secondary: "delete"
    }

    return(
        <button className={`button ${buttons[btnType]}`} onClick={onClick}>{children}</button>
    )
}