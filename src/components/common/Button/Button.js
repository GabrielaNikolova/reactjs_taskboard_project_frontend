import './Button.css';

function Button(props) {

    return (
        <button
            id={props.id}
            className={props.className}
        >
            {props.value}
        </button>
    );
}
Button.defaultProps = {
    type: "submit",
    className: "custom-btn",
    disabled: false
}

export default Button;