import Footer from "../components/Footer";
import Header from "../components/Header";
import DomainesBlocs from "../components/DomainesBlocs";

function Domaines() { 

    return (
        <>
            <Header background="domaines" text="Facilitez vos démarches après un sinistre"/>
            <div className="pb-32"></div>
            <div>
                {/* Titre général */}
                <div className="flex justify-center w-2/3 m-auto pb-20">
                    <h1 className="font-primary text- uppercase text-center text-3xl sm:text-5xl pb-5 border-b-4 border-primary tracking-widest transition-all ease-in-out duration-500">domaines d'intervention</h1>
                </div>

                {/* Introduction */}
                <div className="font-primary text-center text-lg sm:text-xl w-2/3 m-auto">
                    <p className="text-primary my-10 mt-0">Determinant propose une solution globale de diagnostics et d’ingénierie. Partenaires des assureurs et de leurs experts, nos ingénieurs interviennent en tant que spécialistes sur l’ensemble des sinistres.</p>
                </div>
            </div>
            <DomainesBlocs/>
            <div className="pb-32"></div>
            <Footer/>
            
        </>
    )
}
export default Domaines;