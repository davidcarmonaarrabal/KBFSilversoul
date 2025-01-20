import Link from "next/link";
import { usePathname } from "next/navigation";


const Menu: React.FC = () => {
    const pathname = usePathname();
    return (
        <div className="flex flex-col items-center justify-center pt-5 lg:flex-row lg:space-x-3 lg:items-center md:pt-0">
            <Link href={'/my_work'}>
                <button className={`hover:text-blue-900 hover:border-b-2 
                    hover:border-black transition duration-300 
                    text-black ${pathname.startsWith('/my_work') && 'bg-yellow-100 rounded-lg p-1'}`}>My work</button>
            </Link>
            <Link href={'/mods'}>
                <button className={`hover:text-blue-900 hover:border-b-2 
                    hover:border-black transition duration-300 
                    text-black ${pathname.startsWith('/mods') && 'bg-yellow-100 rounded-lg p-1'}`}>Mods</button>
            </Link>
            <Link href={'/tester'}>
                <button className={`hover:text-blue-900 hover:border-b-2 
                    hover:border-black transition duration-300 
                    text-black ${pathname.startsWith('/tester') && 'bg-yellow-100 rounded-lg p-1'}`}>Tester</button>
            </Link>
            <Link href={'/recomendations'}>
                <button className={`hover:text-blue-900 hover:border-b-2 
                    hover:border-black transition duration-300 
                    text-black ${pathname.startsWith('/recomendations') && 'bg-yellow-100 rounded-lg p-1'}`}>Recomendations</button>
            </Link>
            <Link href={'/about_me'}>
                <button className={`hover:text-blue-900 hover:border-b-2 
                    hover:border-black transition duration-300 
                    text-black ${pathname.startsWith('/about_me') && 'bg-yellow-100 rounded-lg p-1'}`}>About me</button>
            </Link>
        </div>
    );
};

export default Menu;