import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-700 p-4 z-50 relative">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo e Links - Parte Esquerda */}
                <div className="flex items-center space-x-8">
                    {/* Logo */}
                    <Link to="/">
                        <div className="px-4">
                            <img src={Logo} alt="Logo da HotWheels" className="h-16" />
                        </div>
                    </Link>

                    {/* Links - Desktop */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="text-white hover:text-blue-300">Home</Link>
                        <Link to="/sobre" className="text-white hover:text-blue-300">Sobre</Link>
                        <Link to="/listadecarros" className="text-white hover:text-blue-300">Lista de Carros</Link>
                    </div>
                </div>

                {/* Botão - Parte Direita para Desktop */}
                <div className="hidden md:flex">
                    <Link
                        to="/adicionarcarro"
                        className="bg-yellow-300 text-black font-bold px-4 py-2 rounded border-solid border-4 border-yellow-400 hover:bg-yellow-400"
                    >
                        Adicionar Carro
                    </Link>
                </div>

                {/* Menu Hamburguer para dispositivos móveis */}
                <div className="md:hidden ml-auto">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>

                {/* Links - Mobile (menu hamburguer) */}
                <div className={`md:hidden ${isOpen ? "block" : "hidden"} absolute top-20 left-0 w-full bg-blue-700 z-50`}>
                    <ul className="flex flex-col space-y-4 py-4 px-6 text-left">
                        <li>
                            <Link to="/" className="text-white hover:text-blue-300">Home</Link>
                        </li>
                        <li>
                            <Link to="/sobre" className="text-white hover:text-blue-300">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/listadecarros" className="text-white hover:text-blue-300">Lista de Carros</Link>
                        </li>
                        <li>
                            <Link to="/adicionarcarro" className="text-white hover:text-blue-300">Adicionar Carro</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
