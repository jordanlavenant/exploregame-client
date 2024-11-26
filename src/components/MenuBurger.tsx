import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MenuBurger: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Bouton Burger */}
            {!isOpen && (
                <button
                    onClick={toggleMenu}
                    className="text-3xl z-50 relative focus:outline-none"
                >
                    {/* Icône du menu burger */}
                    <img className="w-10" src="/Menu-Burger.png" alt="Menu Burger Icon" />
                </button>
            )}

            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-[#822369] bg-opacity-100 z-40 flex flex-col items-center justify-between p-8"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }} 
                    transition={{ type: 'spring', stiffness: 300, damping: 35 }}
                >
                    {/* Header avec le logo et bouton de fermeture */}
                    <header className="w-full flex flex-col items-center space-y-6 justify-center flex-grow">
                        {/* Logo principal animé */}
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <img src="/white-logo-iut.svg" alt="Logo IUT" className="w-40 mx-auto" />
                        </motion.div>

                        {/* Navigation animée */}
                        <motion.nav
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <motion.ul
                                className="text-center text-white text-xl font-bold space-y-6"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{
                                    staggerChildren: 0.1, // Animation de chaque élément avec un délai
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 30,
                                }}
                            >
                                <motion.li variants={{ visible: { y: 0 }, hidden: { y: 20 } }}>
                                    <a href="/" className="hover:underline">ACCUEIL</a>
                                </motion.li>
                                <motion.li variants={{ visible: { y: 0 }, hidden: { y: 20 } }}>
                                    <a href="/" className="hover:underline">LES FILIERES</a>
                                </motion.li>
                                <motion.li variants={{ visible: { y: 0 }, hidden: { y: 20 } }}>
                                    <a href="/" className="hover:underline">PROFIL</a>
                                </motion.li>
                                <motion.li variants={{ visible: { y: 0 }, hidden: { y: 20 } }}>
                                    <a href="/" className="hover:underline">ACTUALITES</a>
                                </motion.li>
                                <motion.li variants={{ visible: { y: 0 }, hidden: { y: 20 } }}>
                                    <a href="/" className="hover:underline">CARTE</a>
                                </motion.li>
                                <motion.li variants={{ visible: { y: 0 }, hidden: { y: 20 } }}>
                                    <a href="/" className="hover:underline">LES BDE</a>
                                </motion.li>
                            </motion.ul>
                        </motion.nav>
                    </header>

                    {/* Logo en bas animé */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, type: 'spring', stiffness: 300, damping: 30 }}
                        className="w-full flex flex-col items-center"
                    >
                        <img src="/logo-explore-game.svg" alt="Explore Game Logo" className="w-24" />
                    </motion.div>

                    {/* Bouton de fermeture */}
                    <button
                        onClick={toggleMenu}
                        className="absolute top-5 right-5 text-white text-3xl focus:outline-none"
                    >
                        ✕
                    </button>
                </motion.div>
            )}
        </>
    );
};

export default MenuBurger;
