import { datas } from '../datas';

function Entites() {

    const entites = datas.entites;

    function handleMouseOver(event) {
        event.target.nextSibling.style.opacity = 0;
    }
    function handleMouseOut(event) {
        event.target.nextSibling.style.opacity = 1;
    }

    return (
        <section id="entites">
          {/* Titre général */}
          <div className="flex justify-center">
            <h1 className="font-primary text-black uppercase text-center text-4xl sm:text-5xl pb-5 border-b-4 border-primary tracking-widest transition-all ease-in-out duration-500">Entités</h1>
          </div>

          {/* Blocs entités */}
          <div className="flex flex-col sm:flex-row justify-center w-full px-10 sm:px-0 mt-16">
            {entites.map((entite, index) => (
              <div key={index}>
                <img 
                  src={entite.logo}
                  alt={entite.alt}
                  className="w-3/4 m-auto border-2 border-primary hover:scale-110 transition-all ease-in-out duration-100 cursor-pointer"
                  onMouseOver={handleMouseOver}  
                  onMouseOut={handleMouseOut}
                />
                <p className="w-3/4 m-auto text-left italic text-primary">{entite.description}</p>
              </div>
            ))}
          </div>
        </section>
    );
}
export default Entites;