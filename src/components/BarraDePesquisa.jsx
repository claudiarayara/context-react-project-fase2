import { useState } from 'react';
import searchIcon from '../assets/search.svg';

export default function BarraDePesquisa({ onSearch }) {
    const [termoPesquisa, setTermoPesquisa] = useState('');

    const handleSearch = (evento) => {
        const value = evento.target.value;
        setTermoPesquisa(value);
        onSearch(value); // Envia o termo de pesquisa para o componente pai
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            {/* Ícone de pesquisa */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={searchIcon} alt="Ícone de pesquisa" className="w-5 h-5" />
            </div>

            {/* Campo de pesquisa */}
            <input
                type="search"
                placeholder="Digite o que você procura"
                className="block w-full pl-10 p-3 text-sm border-2 border-yellow-400 rounded-lg focus:ring-0 focus:outline-none focus:border-yellow-400"
                value={termoPesquisa}
                onChange={handleSearch} // Atualiza o termo de pesquisa e envia para o pai
            />
        </div>
    );
}
