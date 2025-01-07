import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="m-4 mt-5 pl-5 pr-5 flex flex-row justify-center space-x-96 bg-white border-black border-4 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)]">
            <div className="flex flex-row justify-center">
                <Link href="/" className="flex flex-row justify-center">
                    <Image src="/img/logo1.png" alt="logo" width={100} height={60} />
                    <p className="text-4xl pt-6 pl-3 text-black flex flex-col">
                        Mechanical Keyboards Fun{" "}
                        <span className="text-2xl">by Silversoul07</span>
                    </p>
                </Link>
            </div>
            <div className="space-x-3 pt-10">
                <Link href={''}>
                    <button className="hover:text-blue-900 hover:border-b-2 hover:border-black transition duration-300 text-black">My work</button>
                </Link>
                <Link href={''}>
                    <button className="hover:text-blue-900 hover:border-b-2 hover:border-black transition duration-300 text-black">Mods</button>
                </Link>
                <Link href={''}>
                    <button className="hover:text-blue-900 hover:border-b-2 hover:border-black transition duration-300 text-black">Tester</button>
                </Link>
                <Link href={''}>
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
