function Button({ variant = 'secondary', text }) {
    return (
        <button type="button" className={`btn btn-${variant}`}>{text}</button>
    )
}

export default Button;