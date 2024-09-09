import { useState } from 'react';
import editIcon from "../assets/edit.svg";
import trashIcon from "../assets/trash.svg";

export default function CarList({ carros, onEdit, onDelete, onUpdate }) {
    const [carroEmEdicao, setCarroEmEdicao] = useState(null); // Estado para armazenar o carro em edição

    // Função para iniciar a edição de um carro
    const handleEdit = (carro) => {
        setCarroEmEdicao(carro); // Define o carro a ser editado
    };

    // Função para salvar as alterações no carro
    const handleSave = async (event) => {
        event.preventDefault(); // Garante que o evento seja interrompido corretamente
        console.log('Salvando o carro atualizado...', carroEmEdicao); // Verifica o carro atualizado

        try {
            await onUpdate(carroEmEdicao); // Chama a função de atualização passada pelo pai
            setCarroEmEdicao(null); // Limpa o estado de edição após salvar
        } catch (error) {
            console.error('Erro ao salvar o carro:', error);
        }
    };

    // Função para cancelar a edição
    const handleCancel = () => {
        setCarroEmEdicao(null); // Limpa o estado de edição
    };

    return (
        <div className="mx-auto p-8">
            {carros.length === 0 ? (
                <p className="text-center text-2xl text-gray-600">Nenhum carro cadastrado!</p>
            ) : (
                <ul className="space-y-4">
                    {carros.map((carro, index) => (
                        <li
                            key={index}
                            className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md"
                        >
                            {carroEmEdicao && carroEmEdicao.id === carro.id ? (
                                // Formulário de edição aberto se o carro está sendo editado
                                <form onSubmit={handleSave}>
                                    <input
                                        type="text"
                                        value={carroEmEdicao.name}
                                        onChange={(e) => setCarroEmEdicao({ ...carroEmEdicao, name: e.target.value })}
                                        className="p-2 border-2 border-gray-300 rounded-lg w-full mb-2 text-sm font-medium"
                                    />
                                    <input
                                        type="text"
                                        value={carroEmEdicao.brand}
                                        onChange={(e) => setCarroEmEdicao({ ...carroEmEdicao, brand: e.target.value })}
                                        className="p-2 border-2 border-gray-300 rounded-lg w-full mb-2 text-sm font-medium"
                                    />
                                    <input
                                        type="text"
                                        value={carroEmEdicao.color}
                                        onChange={(e) => setCarroEmEdicao({ ...carroEmEdicao, color: e.target.value })}
                                        className="p-2 border-2 border-gray-300 rounded-lg w-full mb-2 text-sm font-medium"
                                    />
                                    <input
                                        type="text"
                                        value={carroEmEdicao.year}
                                        onChange={(e) => setCarroEmEdicao({ ...carroEmEdicao, year: e.target.value })}
                                        className="p-2 border-2 border-gray-300 rounded-lg w-full mb-2 text-sm font-medium"
                                    />
                                    <div className="flex justify-center flex-wrap">
                                        <div className="p-4">
                                            <button type="submit" className="bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-800">
                                                Salvar Alterações
                                            </button>
                                        </div>
                                        <div className="p-4">
                                            <button type="button" onClick={handleCancel} className="bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-red-800">
                                                Cancelar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                // Exibição padrão do carro com os botões de editar e excluir
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-medium">
                                        {carro.name} • {carro.brand} • {carro.color} • {carro.year}
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        {/* Botão de editar */}
                                        <button onClick={() => handleEdit(carro)}>
                                            <img src={editIcon} alt="Editar" className="w-6 h-6 hover:opacity-80" />
                                        </button>

                                        {/* Botão de excluir */}
                                        <button onClick={() => onDelete(carro)}>
                                            <img src={trashIcon} alt="Excluir" className="w-6 h-6 hover:opacity-80" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
