import '@/loader.css';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    borderColor?: 'default' | 'primary' | 'secondary';
    loading?: boolean;
}

function Button({
    children,
    className = '',
    color = 'default',
    loading,
    ...props
}: ButtonProps) {

    return (
        <button
            className={`p-2 ${className} rounded items-center hover:opacity-90 shadow-neutral-600`}
            {...props}
        >
            {loading ? (
                    <span>Carregando...</span>
            ) : children}
        </button>
    );
}

export default Button;  