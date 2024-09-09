import NavBar from "../components/NavBar";
import Rodape from "../components/Rodape";

export default function Sobre() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* NavBar */}
            <NavBar />

            {/* Conteúdo principal */}
            <div className="flex-grow p-8">
                <h1 className="titulo p-4">Sobre</h1>
                <div className="p-8 text-justify">
                    <p className="mb-4">Nesta aplicação, você terá acesso a uma coleção cuidadosamente organizada de modelos HotWheels.</p>
                    <p className="mb-4">Criada como parte da disciplina de Desenvolvimento de Sistemas Frontend do curso de Graduação Online da PUCRS, esta biblioteca tem como objetivo oferecer uma plataforma intuitiva para explorar, gerenciar e expandir sua coleção de carros. Por meio de um sistema CRUD, será possível visualizar, adicionar e remover carros da lista.</p>
                    <p>Seja você um entusiasta de longa data ou apenas curioso sobre o universo HotWheels, aproveite a navegação e descubra a adrenalina em miniatura que esses modelos oferecem!</p>

                </div>
            </div>

            {/* Rodapé */}
            <Rodape />
        </div>
    )
}
