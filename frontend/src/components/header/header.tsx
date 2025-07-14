import Image from "next/image";

function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-zblack text-zwhite">
            <div>
                <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            </div>
            <div className="w-32 h-12">
                <h3 className="text-2xl font-bold">User</h3>
            </div>
        </header>
    );
}

export default Header;