import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileDropdowOpen, setMobileDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const mobileDropdownRef = useRef(null);


    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleDropdwn = () => setDropdownOpen(!dropdownOpen);
    const taggleMobileDropdow = () => setMobileDropdownOpen(!mobileDropdowOpen);


    { /* Fechar dropdown ao clicar fora*/}
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
            if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
                setMobileDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-900 z-50 shadow-md">
            <div className="flex justify-between items-center text-white py-4 px-6 lg:px-20">
                {/* Logo */}
                <div className='text-3xl font-bold'><Link to="/ ">SorteZoom</Link></div>

                {/* Menu principal */}
                <ul className='hidden lg:flex gap-8 text-lg'>
                    <li><Link to="/" className='hover:text-fuchsia-600 transition text-lg'>Início</Link></li>
                    <li className='relative' ref={dropdownRef}>
                        <button 
                            onClick={toggleDropdwn} 
                            className='flex items-center gap-2 text-lg font-medium hover:text-fuchsia-600 transition'
                            >
                            Sortear<FaChevronDown className='text-lg' />
                        </button>
                        {dropdownOpen && (
                            <ul className='absolute left-0 mt-2 bg-slate-800 text-white shadow-lg rounded-md overflow-hidden min-w-max'>
                                <li className='px-4 py-2 hover:text-fuchsia-600'><Link to="/sorteio-de-nomes">Sorteio de nomes</Link></li>
                                <li className="px-4 py-2 hover:text-fuchsia-600"><Link to="/sorteio-de-numeros">Sorteio de números</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/" className='hover:text-fuchsia-600 transition text-lg'>Entrar</Link></li> 
                </ul>

                {/* Botão do menu mobile */}
                <button className='lg:hidden text-2xl' onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <CiMenuFries />}
                </button>
            </div>

            {/* Menu mobile */}
            {menuOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-slate-900 shadow-lg py-5">
                    <ul className='text-center text-lg text-white'>
                        <li className="hover:text-fuchsia-600 transition px-4 py-2"><Link to="/" onClick={toggleMenu}>Início</Link></li>
                        <li className='relative' ref={mobileDropdownRef}>
                            <button
                                onClick={taggleMobileDropdow}
                                className='flex justify-center items-center gap-2 text-lg font-medium w-full hover:text-fuchsia-600 transition'
                            >
                                Sortear <FaChevronDown className='text-lg'/>
                            </button>
                            {mobileDropdowOpen && (
                                <ul className="bg-slate-800 text-white shadow-lg rounded-md overflow-hidden mt-2">
                                   <li className="px-4 py-2 hover:text-fuchsia-600"><Link to="/sorteio-de-nomes" onClick={toggleMenu}>Sorteio de nomes</Link></li>
                                   <li className="px-4 py-2 hover:text-fuchsia-600"><Link to="/sorteio-de-numeros" onClick={toggleMenu}>Sorteio de números</Link></li>
                                   <li className="px-4 py-2 hover:text-fuchsia-600"><Link to="/name-draw/option3" onClick={toggleMenu}>Sorteio no Instagram</Link></li>
                            </ul>
                            )}
                        </li>
                        <li className="hover:text-fuchsia-600 transition px-4 py-2"><Link to="/" onClick={toggleMenu}>Entrar</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
