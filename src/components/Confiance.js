import { datas } from '../datas';

function Confiance() {

    const partenaires = datas.partenaires;

    return (
        <section id="confiance">
          {/* Titre général */}
          <div className="flex justify-center">
            <h1 className="font-primary text- uppercase text-center text-4xl sm:text-5xl pb-5 border-b-4 border-primary tracking-widest transition-all ease-in-out duration-500">ils nous font confiance</h1>
          </div>

          {/* Ils nous font confiance logos */}
          <div className="pt-20">

            <div className="w-full sm:w-2/3 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4 pb-20">
                {partenaires.map((societe, index) => (
                <div className="menu-direction pt-10" key={index}>
                    <img src={societe.logo} alt={`${societe.alt}`} className="w-full px-10 m-auto"/>
                </div>
                ))}
            </div>
              
          </div>
        </section>
    );
    
}

export default Confiance;