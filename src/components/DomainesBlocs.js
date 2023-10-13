import { useEffect, useState } from 'react';
import { datas } from '../datas.js';

function DomainesBlocs(){

    const metiers = datas.domaines;

    const [currentIndices, setCurrentIndices] = useState(metiers.map(() => 0));

    const prevSlide = (carouselIndex, slidesLength) => {
        setCurrentIndices(indices =>
            indices.map((currentIndex, index) => 
                index === carouselIndex
                    ? currentIndex - 1 < 0 
                        ? slidesLength - 1 
                        : currentIndex - 1
                    : currentIndex)
            );
    };

    const nextSlide = (carouselIndex, slidesLength) => {
        setCurrentIndices(indices =>
            indices.map((currentIndex, index) => 
                index === carouselIndex
                    ? currentIndex + 1 === slidesLength 
                        ? 0 
                        : currentIndex + 1
                    : currentIndex)
            );
    };


    const [isMobile, setIsMobile] = useState(false);

    // Vérifier si l'écran est mobile lors du montage du composant
    useEffect(() => {
        updateScreen();
        window.addEventListener('resize', updateScreen);
        return () => window.removeEventListener('resize', updateScreen);
    }, []);

    const imgClassName = isMobile ? 'mobile-class' : 'desktop-class';


    const updateScreen = () => {
        setIsMobile(window.innerWidth <= 990);
    }

    return (
        <section id="metiers">
            {metiers.map((metier, carouselIndex) => (
                <div key={metier.id}>
                    {/* Header */}
                    <div className="flex flex-col items-center justify-center align-center text-center text-white pb-10 pt-20">
                        {imgClassName === 'mobile-class' ?
                            <img src={metier.imgMobile} alt="placeholder" className="w-full"/>
                            :
                            <img src={metier.img} alt="placeholder" className="w-full"/>
                        }
                        <div className="absolute">
                            <h2 className="m-auto w-5/6 text-3xl pb-5 md:text-4xl 2xl:text-5xl 3xl:text-7xl lg:pb-5 xl:pb-10 font-bold lg:font-normal font-primary">{metier.title}</h2>
                            <hr className="w-1/3 m-auto border-1 border-white"></hr>
                            <p className="text-lg pt-5 w-5/6  md:text-lg lg:text-xl xl:text-xl 3xl:text-3xl lg:pt-10 xl:pt-10 sm:w-2/3 m-auto font-primary bold italic">{metier.description} </p>
                        </div>
                    </div>
                    {/* Titre de l'article */}
                    <div>
                        <h3 className='w-2/3 m-auto pb-10 font-primary text-primary'>{metier.titleSection}</h3>
                    </div>
                    {/* Process */}
                    {metier.process && metier.process.length > 0 && (
                        
                            imgClassName !== 'mobile-class' ?
                            <>
                                <div className="w-full h-[750px] relative flex justify-center mb-20">
                                    <img src="../images/domaines/process/process.svg" alt="placeholder" className="w-64 m-auto absolute top-0"/>
                                    {metier.process.map((item, index) => (  
                                        <div 
                                            key={index} 
                                            style={{top: item.top}} 
                                            className={`absolute w-1/6 flex flex-col ${index % 2 === 0 ? "mr-[650px] text-left items-start" : "ml-[650px] text-right items-end"}`}
                                        >
                                            <h2 className={`text-xl text-[${item.color}] uppercase`}>{item.title}</h2>
                                            <hr className={`w-1/3 border-2 mb-5 mt-2 border-[${item.color}]`}></hr>
                                            <ul className={index % 2 === 0 ? "text-left" : "text-right rtl"}>
                                                {item.description.map((li, index) => (
                                                    <li key={index} className={`text-md native-bullet-list`}>{li}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </>
                            :
                            metier.process.map(( item ) => (
                                <div key={item.index} style={{backgroundColor: item.color}} className="flex justify-center items-center flex-col p-16 w-5/6 m-auto rounded-3xl mb-10">
                                    <img src={item.icon} alt="placeholder" className="h-16 w-16"/>
                                    <h2 className="text-xl text-center text-white uppercase pt-5">{item.title}</h2>
                                    <hr className="w-1/3 m-auto border-2 mb-5 mt-2 border-white"></hr>
                                    <p className="text-center text-white text-lg">{item.description}</p>
                                </div>
                            ))
                        
                    )}
                    {/* Colonne */}
                    {metier.col.list && metier.col.list.length > 0 && (
                        <div className="flex-col sm:flex-row flex w-2/3 m-auto">
                            <div className="w-full pb-10 sm:pb-10 sm:pr-10">
                                <ul className="custom-bullet-list text-secondary text-lg 3xl:text-xl">
                                    {metier.col.list.map(item => <li>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                    )}
                    {/* carousel */}
                    {metier.carousel.imgs && metier.carousel.imgs.length > 0 && (
                        <div id="carousel" className="m-auto py-10 flex flex-row justify-center items-center">
                            {/* Fléche gauche */}
                            <div 
                                className="left-0 p-2 py-5 cursor-pointer"
                                onClick={() => prevSlide(carouselIndex, metier.carousel.imgs.length)}
                            >
                                <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" className="fill-primary h-14 w-14 rotate-180" x="0px" y="0px"
                                    viewBox="0 0 79 109.68">
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
                            {/* Image précédente */}
                            <div className='relative'>
                                <img 
                                    src={metier.carousel.imgs[(currentIndices[carouselIndex] - 1 + metier.carousel.imgs.length) % metier.carousel.imgs.length]} 
                                    alt='placeholder' 
                                    className='rounded-full max-h-48 max-w-48'
                                />
                            </div>
                            {/* Image actuelle */}
                            <div className='relative px-2 sm:px-5'>
                                <img 
                                    src={metier.carousel.imgs[currentIndices[carouselIndex]]} 
                                    alt='placeholder' 
                                    className='rounded-full max-h-48 max-w-48'
                                />
                                {metier.id % 2 === 0 ? (
                                    <div className='absolute w-16 h-16 bottom-14 sm:w-40 sm:h-40 md:w-[200px] md:h-[200px]   sm:bottom-[50%] md:bottom-[30%] left-0 rounded-full -z-10 bg-primary'></div>
                                ):(
                                    <div className='absolute w-16 h-16 bottom-14 sm:w-40 sm:h-40 sm:bottom-[30%] right-0 rounded-full -z-10 bg-primary'></div>
                                )}
                                
                            </div>

                            {/* Image suivante */}
                            <div className='relative'>
                                <img 
                                    src={metier.carousel.imgs[(currentIndices[carouselIndex] + 1) % metier.carousel.imgs.length]} 
                                    alt='placeholder' 
                                    className='rounded-full max-h-48 max-w-48'
                                />
                            </div>
                            {/* Flèche droite */}
                            <div 
                                className=" right-0 p-2 py-5 cursor-pointer"
                                onClick={() => nextSlide(carouselIndex, metier.carousel.imgs.length)}
                            >
                                <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" className="fill-primary h-14 w-14" x="0px" y="0px"
                                    viewBox="0 0 79 109.68">
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
                        </div>
                    )}
                </div>
            ))}
        </section>
    )
}
export default DomainesBlocs;