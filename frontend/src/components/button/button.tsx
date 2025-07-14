interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    borderColor?: 'default' | 'primary' | 'secondary';
}

function Button({
    children,
    className = '',
    color = 'default',
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {

    return (
        <button
            className={`p-2 ${className} rounded items-center hover:opacity-90 shadow-neutral-600`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;  