import { useState } from 'react';
import { adicionarCarro } from '../services/carService';

export default function CarForm({ onAddCarros }) {
    const [name, setNome] = useState('');
    const [brand, setMarca] = useState('');
    const [color, setCor] = useState('');
    const [year, setAno] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const novoCarro = { name, brand, color, year };

        try {
            await adicionarCarro(novoCarro);
            alert('Carro adicionado com sucesso!');
            onAddCarros(); // Atualiza a lista de carros no componente pai

            // Limpa os campos do formulário
            setNome('');
            setMarca('');
            setCor('');
            setAno('');
        } catch (error) {
            console.error('Erro ao adicionar o carro:', error);
            alert('Erro ao adicionar o carro.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 p-8 max-w-lg mx-auto rounded-lg">

            {/* Campos de entrada organizados verticalmente */}
            <div className="space-y-4">
                <div>
                    <label className="block font-bold text-gray-700">Nome</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome do Veículo"
                        className="w-full p-2 border-2 border-blue-600 rounded-lg focus:ring-0 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block font-bold text-gray-700">Marca</label>
                    <input
                        type="text"
                        value={brand}
                        onChange={(e) => setMarca(e.target.value)}
                        placeholder="Marca do Veículo"
                        className="w-full p-2 border-2 border-blue-600 rounded-lg focus:ring-0 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block font-bold text-gray-700">Cor</label>
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setCor(e.target.value)}
                        placeholder="Cor do Veículo"
                        className="w-full p-2 border-2 border-blue-600 rounded-lg focus:ring-0 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block font-bold text-gray-700">Ano</label>
                    <input
                        type="text"
                        value={year}
                        onChange={(e) => setAno(e.target.value)}
                        placeholder="Ano do Veículo"
                        className="w-full p-2 border-2 border-blue-600 rounded-lg focus:ring-0 focus:outline-none"
                    />
                </div>
            </div>

            {/* Botão de adicionar */}
            <div className="flex justify-center mt-8">
                <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800">
                    Adicionar
                </button>
            </div>
        </form>
    );
}