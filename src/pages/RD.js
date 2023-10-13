import Footer from "../components/Footer";
import Header from "../components/Header";
import RdBlocs from "../components/RdBlocs";

function Rd() {
    return (
        <>
            <Header background="rd" text="Facilitez vos démarches après un sinistre"/>
            <div className="pb-32"></div>
            <div>
                {/* Titre général */}
                <div className="flex justify-center w-2/3 m-auto pb-20">
                    <h1 className="font-primary text- uppercase text-center text-3xl sm:text-5xl pb-5 border-b-4 border-primary tracking-widest transition-all ease-in-out duration-500">recherche & développement</h1>
                </div>

                {/* Introduction */}
                <div className="font-secondary text-center text-lg sm:text-xl w-2/3 m-auto ">
                    <p className="text-primary mb-10 mt-0">Dans le cadre de son développement scientifique, DETERMINANT France met l’innovation au cœur de son ADN et collabore avec des partenaires scientifiques et des Ecoles d’ingénieurs à travers des thèses CIFRE accordées par l’Association Nationale de la Recherche et Technologie (ANRT).</p>

                    <h3 className="uppercase font-primary text-primary m-auto w-2/3 text-center mb-5 text-lg font-bold">La Recherche chez DETERMINANT France est exercée sur deux axes&nbsp;:</h3>

                    <ul className="mb-10">
                        <li>- L’ingénierie et la gestion des risques dans l’environnement</li>
                        <li>- Le développement des outils informatiques dans le cadre de la gestion technique 
                    des sinistres</li>
                    </ul>

                    <p className="mb-10">L’objectif de ces recherches est d’avoir une approche prévisible des dommages qui sont causés par les catastrophes naturelles et qui doivent être gérer de façon durable. Les partenaires de R&D sont aussi des laboratoires de recherches fondamentales.</p>

                    <p className="mb-10">De multiples brevets ont été déposés afin de trouver des solutions innovantes dans le cadre de la réparation des sinistres.<br/>
                    Le Scanner 3D et le Scanner PS1000 sont des outils régulièrement employés par nos ingénieurs afin de réaliser un relevé détaillé et en 3D du bâtiment après sinistre.</p>
                </div>

                {/* Projets */}
                <h3 className="uppercase font-primary text-primary m-auto w-2/3 text-center mb-5 text-lg font-bold">nos projets en cours</h3>
                <div className="text-center text-lg sm:text-xl w-2/3 m-auto bg-projet p-10 rounded-lg">
                    <div className="flex flex-row items-center justify-center">
                        <img src="../images/RD/brevet.svg" alt="icon brevet" className="h-10 w-10"/>
                        <h3 className="font-secondary uppercase text-white text-md pl-2">brevet</h3>
                    </div>
                    <p className="text-white text-sm mb-10 mt-0">Instrumentation des ouvrages par injection de résine expansive au cours de la réparation.<br></br>
                    Contrôle et monitoring du sol d’assise des ouvrages par injection de résine expansive.</p>

                    <div className="flex flex-row items-center justify-center">
                        <img src="../images/RD/these.svg" alt="icon brevet" className="h-10 w-10"/>
                        <h3 className="font-secondary uppercase text-white text-md pl-2">thèse</h3>
                    </div>
                    <p className="text-white text-sm mb-10 mt-0">Gestion et prévision des dommages causés par la sécheresse dans le contexte de l’interaction sol – structure.<br></br> 
                    Problématique liée à l’injection de résine expansive dans les sols argileux gonflants.</p>

                    <div className="flex flex-row items-center justify-center">
                        <img src="../images/RD/RD.svg" alt="icon brevet" className="h-10 w-10"/>
                        <h3 className="font-secondary uppercase text-white text-md pl-2">R&D</h3>
                    </div>
                    <p className="text-white text-sm mb-10 mt-0">Développement d’une plateforme numérique et informatique pour la gestion des sinistres (R&D)</p>
                </div>

                {/* Partenaires */}
                <div className="w-full sm:w-2/3 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4 pt-20">
                    <div className="menu-direction pt-2 px-16 sm:px-0">
                        <img src="../images/RD/partenaires/01_universite_strasbourg.jpg" alt="Universite strasbourg" className="border-primary border"/>
                    </div>
                    <div className="menu-direction pt-2 px-16 sm:px-0">
                        <img src="../images/RD/partenaires/02_INSA.jpg" alt="INSA" className=" border-primary border"/>
                    </div>
                    <div className="menu-direction pt-2 px-16 sm:px-0">
                        <img src="../images/RD/partenaires/03_icube.jpg" alt="Icube" className=" border-primary border"/>
                    </div>
                    <div className="menu-direction pt-2 px-16 sm:px-0">
                        <img src="../images/RD/partenaires/04_CNRS.jpg" alt="CNRS" className=" border-primary border"/>
                    </div>
                    <div className="menu-direction pt-2 px-16 sm:px-0">
                        <img src="../images/RD/partenaires/05_cifre.jpg" alt="Cifre" className=" border-primary border"/>
                    </div>   
                </div>
            </div>
            <RdBlocs/>
            <div className="pb-32"></div>
            <Footer/>
            
        </>
    )    
}
export default Rd;