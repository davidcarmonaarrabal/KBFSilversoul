import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="m-4 mt-5 pl-5 pr-5 flex flex-col justify-center bg-white border-black border-4 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)] md:flex-row md:space-x-64">
            <div className="flex flex-col justify-center">
                <Link href="/" className="flex flex-row justify-center">
                    <Image src="/img/logo1.png" alt="logo" width={120} height={60} className='max-w-full h-auto'/>
                    <p className="text-4xl pl-3 justify-center text-black flex flex-col lg:items-center">
                        Mechanical Keyboards Fun{" "}
                        <span className="text-2xl">by Silversoul07</span>
                    </p>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center pt-5 lg:flex-row lg:space-x-3 lg:items-center md:pt-0">
                <Link href={'/my_work'}>
                    <button className="hover:text-blue-900 hover:border-b-2 hover:border-black transition duration-300 text-black">My work</button>
                </Link>
                <Link href={'/mods'}>
                    <button className="hover:text-blue-900 hover:border-b-2 hover:border-black transition duration-300 text-black">Mods</button>
                </Link>
                <Link href={'/tester'}>
                    <button className="hover:text-blue-900 hover:border-b-2 hover:border-black transition duration-300 text-black">Tester</button>
                </Link>
                <Link href={'/recomendations'}>
                    <button className="hover:text-blue-900 hover:border-b-2 hover:border-black transition duration-300 text-black">Recomendations</button>
                </Link>
                <Link href={'/about_me'}>
                    <button className="hover:text-blue-900 hover:border-b-2 hover:border-black transition duration-300 text-black">About me</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
