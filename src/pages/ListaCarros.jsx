import { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import CarList from "../components/CarList";
import Rodape from "../components/Rodape";
import { listarCarros, editarCarro, excluirCarro } from '../services/carService';
import BarraDePesquisa from "../components/BarraDePesquisa";

export default function ListaCarros() {
    const [carros, setCarros] = useState([]);
    const [carroEmEdicao, setCarroEmEdicao] = useState(null);
    const [termoPesquisa, setTermoPesquisa] = useState(''); // Estado para o termo de pesquisa

    // Carregar a lista de carros ao iniciar
    const carregarCarros = async () => {
        try {
            const dados = await listarCarros();
            setCarros(dados);
        } catch (error) {
            console.error('Erro ao carregar os carros:', error);
        }
    };

    useEffect(() => {
        carregarCarros(); // Chama a função quando o componente é montado
    }, []);

    // Função para iniciar a edição de um carro
    const handleEdit = (carro) => {
        console.log("Carro selecionado para edição:", carro); // Log para verificar o carro selecionado
        setCarroEmEdicao(carro); // Armazena o carro selecionado no estado para ser editado
    };

    // Função para salvar as alterações no carro
    const handleUpdateCarro = async (carroAtualizado) => {
        console.log("Salvando o carro atualizado...", carroAtualizado); // Verifica o carro que está sendo atualizado
        try {
            await editarCarro(carroAtualizado); // Faz a requisição PUT para a API
            alert('Carro atualizado com sucesso!');
            carregarCarros(); // Atualiza a lista de carros após a edição
        } catch (error) {
            console.error('Erro ao atualizar o carro:', error);
        }
    };

    // Função para excluir um carro
    const handleDelete = async (carro) => {
        if (window.confirm(`Deseja realmente excluir o carro ${carro.name}?`)) {
            try {
                await excluirCarro(carro.id);
                alert('Carro excluído com sucesso!');
                carregarCarros(); // Atualiza a lista de carros após a exclusão
            } catch (error) {
                console.error('Erro ao excluir o carro:', error);
            }
        }
    };

    // Função para filtrar os carros com base no termo de pesquisa
    const carrosFiltrados = carros.filter(carro => 
        carro.name.toLowerCase().includes(termoPesquisa.toLowerCase()) || 
        carro.brand.toLowerCase().includes(termoPesquisa.toLowerCase()) || 
        carro.color.toLowerCase().includes(termoPesquisa.toLowerCase()) || 
        carro.year.includes(termoPesquisa)
    );

    return (
        <div className="min-h-screen flex flex-col">
            {/* NavBar */}
            <NavBar />

            <div className="flex-grow p-8">
                {/* Barra de Pesquisa */}
                <BarraDePesquisa onSearch={setTermoPesquisa} /> {/* Passando a função para pesquisar */}

                <h1 className="titulo p-4">Biblioteca de Carros:</h1>

                {/* Renderiza o formulário de edição, se houver um carro sendo editado */}
                {carroEmEdicao && (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleUpdateCarro(carroEmEdicao); // Salva o carro em edição
                    }}>
                        <input
                            type="text"
                            value={carroEmEdicao.name}
                            onChange={(e) => setCarroEmEdicao({ ...carroEmEdicao, name: e.target.value })}
                        />
                        <input
                            type="text"
                            value={carroEmEdicao.brand}
                            onChange={(e) => setCarroEmEdicao({ ...carroEmEdicao, brand: e.target.value })}
                        />
                        <input
                            type="text"
                            value={carroEmEdicao.color}
                            onChange={(e) => setCarroEmEdicao({ ...carroEmEdicao, color: e.target.value })}
                        />
                        <input
                            type="text"
                            value={carroEmEdicao.year}
                            onChange={(e) => setCarroEmEdicao({ ...carroEmEdicao, year: e.target.value })}
                        />
                        <button type="submit">Salvar alterações</button>
                    </form>
                )}

                {/* Renderiza o componente CarList com a lista filtrada */}
                <CarList
                    carros={carrosFiltrados} // Lista filtrada com base no termo de pesquisa
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onUpdate={handleUpdateCarro}
                />
            </div>
            <Rodape />
        </div>
    );
}
