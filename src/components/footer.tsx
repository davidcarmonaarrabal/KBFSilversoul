import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 w-full">
            <div className="container mx-auto flex flex-col items-center justify-between 
            space-y-4 sm:flex-row sm:space-y-0">
                <p className="text-sm">
                    <span className="font-sans font-bold">&copy; {new Date().getFullYear()}</span> <Link href={'/'} className='hover:text-yellow-400 hover:cursor-pointer transition duration-300'>Mechanical Keyboards Fun</Link>. All rights reserved.
                </p>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href={'/about_me'} className="text-gray-400 hover:text-white transition-colors">About me</Link>
                        </li>
                        <li>
                            <Link href={'/contact'} className="text-gray-400 hover:text-white transition-colors">Contact me</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
