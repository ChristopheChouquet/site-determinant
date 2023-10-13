import Footer from "../components/Footer";
import Header from "../components/Header";
import MetiersBlocs from "../components/MetiersBlocs";

function Metier() {
    return (
        <>
            <Header background="metiers" text="Facilitez vos démarches après un sinistre"/>
            <div className="pb-32"></div>
            <div>
                {/* Titre général */}
                <div className="flex justify-center w-2/3 m-auto pb-20">
                    <h1 className="font-primary text- uppercase text-center text-3xl sm:text-5xl pb-5 border-b-4 border-primary tracking-widest transition-all ease-in-out duration-500">determinant, le leader français de l'ingénierie de réparation</h1>
                </div>

                {/* Introduction */}
                <div className="font-primary text-center text-lg sm:text-xl w-2/3 m-auto">
                    <p className="text-primary my-10 mt-0">Depuis 1991, DETERMINANT sait que la maîtrise des quantums et la satisfaction des clients (assuré ou lésé) passe par la maîtrise du diagnostic, une ingénierie de haute compétence et une expérience dans la gestion technique des sinistres médians et graves.</p>

                    <p className="mb-10">Partenaire privilégié des assureurs et de leurs experts, le bureau d’ingénierie et d’investigations DETERMINANT réalise sa mission de manière techniquement très poussée tout en optimisant le délai de ses interventions.</p>

                    <p className="mb-10">Les métiers et la haute technicité des ingénieurs de DETERMINANT lui permettent de limiter la dispersion des acteurs, de valoriser le rôle de l’expert d’assurance qui peut s’appuyer sur des prestataires efficaces et compétents.</p>
                </div>
            </div>
            <MetiersBlocs/>
            <div className="pb-32"></div>
            <Footer/>
            
        </>
    )
}
export default Metier;