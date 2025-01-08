import React from 'react';

import Menu from './Menu';
import Logo from './Logo';



const Header: React.FC = () => {
    return (
        <header className="m-4 mt-5 pl-5 pr-5 flex flex-col justify-center bg-white border-black border-4 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)] md:flex-row md:space-x-64">
            <Logo></Logo>
            <Menu></Menu>
        </header>
    );
};

export default Header;
