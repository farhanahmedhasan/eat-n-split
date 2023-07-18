/* eslint-disable react/prop-types */
export default function Button({children, type="button", onClick, btnType="primary"}) {
    const buttons = {
        primary: "add",
        secondary: "delete"
    }

    return(
        <button type={type} className={`button ${buttons[btnType]}`} onClick={onClick}>{children}</button>
    )
}