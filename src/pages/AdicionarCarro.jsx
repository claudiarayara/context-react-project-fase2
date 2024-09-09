import NavBar from "../components/NavBar";
import CarForm from "../components/CarForm";
import Rodape from "../components/Rodape";
import Imagem from "../assets/img.png";

export default function AdicionarCarros({ onAddCarros }) {
    return (
        <div>
            {/* NavBar */}
            <NavBar />

            {/* Formulário de adicionar carros */}
            <div className="p-8">
                <h1 className="titulo p-4">Adicionar novo carro:</h1>
                <CarForm onAddCarros={onAddCarros} />
            </div>

            {/* Imagem com link para lista de carros */}
            <div className="flex justify-center w-auto p-4">
                <a href="/listadecarros">
                    <img src={Imagem} alt="Banner de carro com mensagem: Visite a nossa biblioteca de veículos." className="rounded-lg shadow-md hover:opacity-80" />
                </a>
            </div>

            {/* Rodapé */}
            <Rodape />
        </div>
    );
}
