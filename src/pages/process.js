import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { datas } from '../datas.js';

function Process() { 

    const [isMobile, setIsMobile] = useState(false);
    const process = datas.process;

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
        <>
            <Header background="metiers" text="Facilitez vos démarches après un sinistre"/>
            <div className="pb-32"></div>

            <div>
                {/* Titre général */}
                <div className="flex justify-center w-2/3 m-auto pb-20">
                    <h1 className="font-primary text- uppercase text-center text-3xl sm:text-5xl pb-5 border-b-4 border-primary tracking-widest transition-all ease-in-out duration-500">Apporter de l’ingénierie au bon moment</h1>
                </div>

                {/* Introduction */}
                <div className="font-primary text-center text-lg sm:text-xl w-2/3 m-auto">
                    <p className="text-primary my-10 mt-0">DETERMINANT intervient en fonction de l’état d’avancement du dossier de sinistre et s’adapte aux besoins du contexte</p>
                </div>
                {/* progress */}
                {imgClassName === 'mobile-class' ? 
                    process.map((item) => (
                        <div key={item.id} style={{backgroundColor: item.color}} className="flex justify-center items-center flex-col p-16 w-5/6 m-auto rounded-3xl mb-10">
                            <img src={item.icon} alt="placeholder" className="h-16 w-16"/>
                            <h2 className="text-xl text-center text-white uppercase pt-5">{item.title}</h2>
                            <hr className="w-1/3 m-auto border-2 mb-5 mt-2 border-white"></hr>
                            <p className="text-center text-white text-lg">{item.description}</p>
                        </div>
                    ))
                :
                <div className="bg-white w-full h-[2420px] relative flex justify-center">
                    <img src="../images/process/process_animated.svg" alt="placeholder" className="w-64 m-auto absolute top-0"/>
                    {/* diagnostic */}
                    <div className="absolute top-[50px] mr-[650px] m-auto w-1/6">
                        <h2 className="text-xl text-center text-[#00628B] uppercase">diagnostic</h2>
                        <hr className="w-1/3 m-auto border-2 mb-5 mt-2 border-[#00628B]"></hr>
                        <p className="text-center">Consiste en une évaluation détaillée de l'état d'un bâtiment ou d'une structure existante afin d'identifier les problèmes potentiels</p>
                    </div>
                    {/* maîtrise d'oeuvre */}
                    <div className="absolute top-[290px] ml-[650px] m-auto w-1/6">
                        <h2 className="text-xl text-center text-[#436EFB] uppercase">maîtrise d'oeuvre</h2>
                        <hr className="w-1/3 m-auto border-2 mb-5 mt-2 border-[#436EFB]"></hr>
                        <p className="text-center">Englobe l'ensemble des étapes liées à la conception du projet, de sa planification initiale à sa finalisation.</p>
                    </div>
                    {/* challenger une réclamation maximaliste */}
                    <div className="absolute top-[530px] mr-[650px] m-auto w-1/6">
                        <h2 className="text-xl text-center text-[#FFAE55] uppercase">challenger une réclamation maximaliste</h2>
                        <hr className="w-1/3 m-auto border-2 mb-5 mt-2 border-[#FFAE55]"></hr>
                        <p className="text-center">Parvenir à un règlement équitable et équilibré, en prenant en compte les intérêts et les droits des deux parties impliquées.</p>
                    </div>
                    {/* préconisation de solutions optimisées */}
                    <div className="absolute top-[765px] ml-[650px] m-auto w-1/6">
                        <h2 className="text-xl text-center text-[#7D4CD5] uppercase">préconisation de solutions optimisées</h2>
                        <hr className="w-1/3 m-auto border-2 mb-5 mt-2 border-[#7D4CD5]"></hr>
                        <p className="text-center">Consiste à proposer des solutions techniques et pratiques qui répondent de manière optimale aux besoins et aux objectifs du projet.</p>
                    </div>
                    <div className="absolute top-[1015px] mr-[650px] m-auto w-1/6">
                        <h2 className="text-xl text-center text-[#BE1622] uppercase">ingénierie et modélisation</h2>
                        <hr className="w-1/3 m-auto border-2 mb-5 mt-2 border-[#BE1622]"></hr>
                        <p className="text-center">Permet de créer des représentations virtuelles en 3D du projet, à l'aide de logiciels spécialisés.</p>
                    </div>
                    <div className="absolute top-[1235px] ml-[650px] m-auto w-1/6">
                        <h2 className="text-xl text-center text-[#00628B] uppercase">ingénierie pour compte</h2>
                        <hr className="w-1/3 m-auto border-2 mb-5 mt-2 border-[#00628B] "></hr>
                        <p className="text-center">DETERMINANT engage des ingénieurs spécialisés pour travailler en leur nom. Ces ingénieurs agissent en tant que représentants de l'entreprise pour gérer les aspects techniques du projet.</p>
                    </div>
                    <div className="absolute top-[1450px] mr-[650px] m-auto w-1/6">
                        <h2 className="text-xl text-center text-[#436EFB] uppercase">sapiteur technique d'expert d'assurance</h2>
                        <hr className="w-1/3 m-auto border-2 mb-5 mt-2 border-[#436EFB]"></hr>
                        <p className="text-center">Professionnel mandaté par la compagnie d'assurance pour évaluer les dommages, les pertes et les responsabilités liés au sinistre. Le sapiteur technique possède une expertise approfondie dans le domaine de la construction et des travaux, lui permettant d'analyser les éléments techniques du projet, </p>
                    </div>
                    <div className="absolute top-[1715px] ml-[650px] m-auto w-1/6">
                        <h2 className="text-xl text-center text-[#FFAE55] uppercase">avis sur dossier</h2>
                        <hr className="w-1/3 m-auto border-2 mb-5 mt-2 border-[#FFAE55]"></hr>
                        <p className="text-center">Consiste en l'examen approfondi et l'évaluation d'un dossier de projet, comprenant les plans, les spécifications techniques, les études et les documents pertinents. </p>
                    </div>
                    <div className="absolute top-[1905px] mr-[650px] m-auto w-1/6">
                        <h2 className="text-xl text-center text-[#7D4CD5] uppercase">assistance technique en technique et expertise judiciaire</h2>
                        <hr className="w-1/3 m-auto border-2 mb-5 mt-2 border-[#7D4CD5] "></hr>
                        <p className="text-center">Professionnels spécialisés dans ce domaine apportent leur expertise technique pour assister les parties impliquées dans le processus judiciaire. Ils analysent les éléments techniques du dossier, évaluent les dommages, les malfaçons ou les responsabilités, et fournissent des rapports d'expertise détaillés et impartiaux.</p>
                    </div>
                    <div className="absolute top-[2175px] ml-[650px] m-auto w-1/6">
                        <h2 className="text-xl text-center text-[#BE1622] uppercase">package diagnostic, maîtrise d'oeuvre, chiffrage des travaux</h2>
                        <hr className="w-1/3 m-auto border-2 mb-5 mt-2 border-[#BE1622]"></hr>
                        <p className="text-center">Englobe l'évaluation détaillée de l'état du bâtiment, l'identification des problèmes potentiels et des travaux nécessaires, ainsi que la collecte d'informations essentielles pour la planification du projet.</p>
                    </div>
                </div>
                }

            </div>
            <div className="pb-32"></div>
            <Footer/>
        </>
    )
}
export default Process;