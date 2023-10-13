import { useEffect, useState } from 'react';
import { datas } from "../datas";

function MetiersBlocs(){

    const metiers = datas.metiers;

    const [isMobile, setIsMobile] = useState(false);

    // Vérifier si l'écran est mobile lors du montage du composant
    useEffect(() => {
        updateScreen();
        window.addEventListener('resize', updateScreen);
        return () => window.removeEventListener('resize', updateScreen);
    }, []);

    const imgClassName = isMobile ? 'mobile-class' : 'desktop-class';


    const updateScreen = () => {
        setIsMobile(window.innerWidth <= 640);
    }

    return (
        <section id="metiers">
            {metiers.map((metier) => (
                <div key={metier.id}>
                    {/* Header */}
                    <div className="flex flex-col items-center justify-center align-center text-center text-white pb-10 pt-20">
                        {imgClassName === 'mobile-class' ?
                            <img src={metier.imgMobile} alt="placeholder" className="w-full"/>
                            :
                            <img src={metier.img} alt="placeholder" className="w-full"/>
                        }
                        <div className="absolute">
                            <h2 className="text-4xl pb-5 md:text-4xl lg:text-6xl 2xl:text-6xl 3xl:text-7xl lg:pb-10 xl:pb-16 bold font-primary">{metier.title}</h2>
                            <hr className="w-1/3 m-auto border-1 border-white"></hr>
                            <p className="text-xl pt-5 w-5/6  md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl lg:pt-10 xl:pt-16 sm:w-2/3 m-auto font-primary bold italic">{metier.description} </p>
                        </div>
                    </div>
                    {/* Colonnes */}
                    <div className="flex-col sm:flex-row flex w-2/3 m-auto">
                        {metier.firstCol.title && (
                            <div className="w-full pb-10 sm:pb-10 sm:pr-10">
                                <h2 className="font-primary text-primary mb-5 text-2xl 2xl:text-3xl 3xl:text-4xl">{metier.firstCol.title}</h2>
                                <ul className="custom-bullet-list text-secondary text-lg 3xl:text-xl">
                                    {metier.firstCol.list.map(item => <li>{item}</li>)}
                                </ul>
                            </div>
                        )}
                        {metier.secondCol.title && (
                            <div className="w-full sm:pl-5">
                                <h2 className="font-primary text-primary mb-5 text-2xl 2xl:text-3xl 3xl:text-4xl">{metier.secondCol.title}</h2>
                                <ul className="custom-bullet-list text-secondary text-lg 3xl:text-xl">
                                    {metier.secondCol.list.map(item => <li>{item}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* Engagements */}
                    {metier.engagements && (
                        <div className="w-2/3 m-auto sm:pl-5 border-2 rounded-3xl p-5 mt-10">
                            <h2 className="font-primary text-primary mb-5 text-2xl 2xl:text-3xl 3xl:text-4xl">Nos engagements</h2>
                            <ul className='text-lg 3xl:text-xl'>
                                {metier.engagements.map(item => <li>{`- ${item}`}</li>)}
                            </ul>
                        </div>
                    )}
                    {/* Autres */}
                    {metier.autres && (
                        <div className='w-2/3 m-auto'>
                            { metier.autres.split('.').map((phrase, index) =>
                                <p key={index} className="pb-5 text-xl">{phrase}.</p>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </section>
    )
}
export default MetiersBlocs;