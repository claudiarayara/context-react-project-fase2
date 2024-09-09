import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Banner1 from '../assets/banner1.png'
import Banner2 from '../assets/banner2.png'
import Banner3 from '../assets/banner3.png'

export default function Carousel() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Adicionando os módulos
            spaceBetween={50}
            slidesPerView={1}
            navigation // Ativa a navegação por setas laterais
            pagination={{ clickable: true }} // Ativa a paginação
            autoplay={{ delay: 6000 }} // Ativa o autoplay com 3 segundos de intervalo
            loop={true} //Ativa o loop entre as páginas
            className="w-full"
        >
            <SwiperSlide>
                <div className="h-full flex items-center justify-center">
                    <img src={Banner1} alt="Imagem de carros com a mensagem: Bem-vindos à garagem dos sonhos. Explore nossa coleção de Hotwheels." />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-full flex items-center justify-center">
                    <img src={Banner2} alt="Imagem de carros com a mensagem: Sinta a adrenalina com nossa biblioteca de carros!" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-full flex items-center justify-center">
                    <img src={Banner3} alt="Imagem de carros com a mensagem: Velocidade e estilo em miniatura, sua coleção está aqui!" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
