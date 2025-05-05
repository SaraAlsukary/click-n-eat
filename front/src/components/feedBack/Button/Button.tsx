import './Button.css'
type TButton = {
    children: React.ReactNode | string,
    onClick?: () => void
    disabled?: boolean,
    type?: 'button' | 'submit' | 'reset'
}
const Button = ({ children, disabled, type, onClick }: TButton) => {
    return (
        <button onClick={onClick} disabled={disabled} type={type} className='button'>
            {children}
        </button>
    )
}

export default Button
