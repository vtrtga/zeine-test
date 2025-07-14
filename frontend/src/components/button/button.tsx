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
                <div>
                    <span className="loader h-12 w-12"></span>
                </div>
            ) : children}
        </button>
    );
}

export default Button;  