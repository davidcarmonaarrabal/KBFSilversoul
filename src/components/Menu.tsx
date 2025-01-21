import Link from "next/link";
import { usePathname } from "next/navigation";

const style = "hover:text-blue-900 hover:border-b-2 hover:border-black transition duration-300 text-black";

const Menu: React.FC = () => {
    const pathname = usePathname();
    return (
        <div className="flex flex-col items-center justify-center pt-5 lg:flex-row lg:space-x-3 lg:items-center md:pt-0">
            <Link href={'/my_work'}>
                <button className={`${style} ${pathname.startsWith('/my_work') && 'bg-yellow-100 rounded-lg p-1'}`}>My work</button>
            </Link>
            <Link href={'/mods'}>
                <button className={`${style} ${pathname.startsWith('/mods') && 'bg-yellow-100 rounded-lg p-1'}`}>Mods</button>
            </Link>
            <Link href={'/tester'}>
                <button className={`${style} ${pathname.startsWith('/tester') && 'bg-yellow-100 rounded-lg p-1'}`}>Tester</button>
            </Link>
            <Link href={'/recomendations'}>
                <button className={`${style} ${pathname.startsWith('/recomendations') && 'bg-yellow-100 rounded-lg p-1'}`}>Recomendations</button>
            </Link>
            <Link href={'/about_me'}>
                <button className={`${style} ${pathname.startsWith('/about_me') && 'bg-yellow-100 rounded-lg p-1'}`}>About me</button>
            </Link>
        </div>
    );
};

export default Menu;