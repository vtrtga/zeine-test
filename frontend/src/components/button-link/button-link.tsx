function ButtonLink({
    children,
    className = '',
    ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {

    return (
        <a
            className={`${className} items-center justify-center`}
            {...props}
        >
            {children}
        </a>
    );
}

export default ButtonLink;