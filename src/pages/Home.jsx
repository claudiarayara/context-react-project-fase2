import NavBar from "../components/NavBar";
import Rodape from "../components/Rodape";
import Carousel from "../components/Swiper";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* NavBar */}
            <NavBar />

            {/* Carousel */}
            <Carousel />

            {/* Conteúdo principal */}
            <div className="flex-grow p-8">
                <h1 className="titulo p-4">Bem-vindo à Biblioteca de Carros HotWheels!</h1>
                <p className="text-justify">Aqui você encontrará uma coleção incrível de carros HotWheels, organizada para consulta e exploração. Esta aplicação foi desenvolvida para fornecer uma maneira simples e eficiente de navegar por diferentes modelos, visualizar detalhes e adicionar novos carros à lista.</p>
            </div>

            {/* Rodapé */}
            <Rodape />
        </div>
    )
}