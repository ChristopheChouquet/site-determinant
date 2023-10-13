import { useState } from "react";
import { datas } from "../datas";

function Carrousel() {

    const slides = datas.slides;

    const [currentIndex, setCurrentndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentndex(newIndex);
    }

    return (
        <section id="carousel" className="max-w-full h-screen m-auto py-15 relative">

            {/* Fond */}
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full bg-center bg-cover flex justify-center items-start duration-500"></div>
            {/* Titre principal */}
            <div className="flex justify-center">
                <h1 className="absolute top-0 font-primary text-white uppercase text-center text-4xl sm:text-5xl  pt-20 pb-5 border-b-4 border-white tracking-widest transition-all ease-in-out duration-500">
                nos activités
                </h1>
            </div>
            {/* Titre et sous-titre current slide */}
            <div className="absolute w-full bottom-[50%] sm:bottom-[25%] pl-[0%] sm:pl-[10%]">
                <h2 className="font-primary text-white text-center sm:text-left text-4xl pb-5 sm:text-5xl transition-all ease-in-out duration-500">
                {slides[currentIndex].titre}
                </h2>
                <h3 className="font-secondary text-white text-center sm:text-left text-xl sm:text-2xl transition-all ease-in-out duration-500">{slides[currentIndex].sousTitre}</h3>
            </div>
            {/* Fléche gauche */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-0 p-2 py-5 bg-black hover:bg-white cursor-pointer group transition-all ease-in-out duration-500">
                <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" className="fill-white h-14 w-14 rotate-180 group-hover:fill-black transition-all ease-in-out duration-500" x="0px" y="0px"
                    viewBox="0 0 79 109.68" onClick={prevSlide}>
                <g>
                    <g id="Page-1_00000170247475886868935120000009026497317448903058_">
                        
                            <g id="Dribbble-Light-Preview_00000155120560416221268030000005034868085075899289_" transform="translate(-425.000000, -6679.000000)">
                            <g id="icons_00000152966580795315174870000012597865354438311072_" transform="translate(56.000000, 160.000000)">
                                <path id="arrow_x5F_right-_x5B__x23_333_x5D__00000121966617708372736580000016210146770600540069_" d="
                                    M399.72,6547.28l-3.88,3.92l23.04,24.01l-2.46,2.56l0.01-0.01l-20.47,21.33l3.82,3.98c5.66-5.89,21.46-22.35,26.74-27.85
                                    C422.6,6571.12,426.43,6575.1,399.72,6547.28"/>
                            </g>
                        </g>
                    </g>
                </g>
                </svg>
            </div>
            {/* Flèche droite */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-0 p-2 py-5 bg-black hover:bg-white cursor-pointer group transition-all ease-in-out duration-500">
                <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" className="fill-white h-14 w-14 group-hover:fill-black transition-all ease-in-out duration-500" x="0px" y="0px"
                    viewBox="0 0 79 109.68" onClick={nextSlide}>
                <g>
                    <g id="Page-1_00000170247475886868935120000009026497317448903058_">
                        
                            <g id="Dribbble-Light-Preview_00000155120560416221268030000005034868085075899289_" transform="translate(-425.000000, -6679.000000)">
                            <g id="icons_00000152966580795315174870000012597865354438311072_" transform="translate(56.000000, 160.000000)">
                                <path id="arrow_x5F_right-_x5B__x23_333_x5D__00000121966617708372736580000016210146770600540069_" d="
                                    M399.72,6547.28l-3.88,3.92l23.04,24.01l-2.46,2.56l0.01-0.01l-20.47,21.33l3.82,3.98c5.66-5.89,21.46-22.35,26.74-27.85
                                    C422.6,6571.12,426.43,6575.1,399.72,6547.28"/>
                            </g>
                        </g>
                    </g>
                </g>
                </svg>
            </div>
            
        </section>
    )
}
export default Carrousel;