import React from 'react';
import MenuBurger from './menuBurger';
// import './header.css';

const Header: React.FC = () => {
    return (
        <header className="w-full flex justify-end items-center px-5 py-5">
            <section className="flex flex-wrap justify-between items-center w-3/5">
                <img className="w-36" src="/IUTO.png" alt="logo iut" />
                <MenuBurger />
            </section>
        </header>
    );

};

export default Header;