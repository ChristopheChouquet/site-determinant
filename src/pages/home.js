import Carrousel from "../components/Carousel";
import Confiance from "../components/Confiance";
import Header from "../components/Header";
import Entites from "../components/Entites";
import Equipes from "../components/Equipes";
import Footer from "../components/Footer";

function Home() {

  return (
    <>
        {/* <div id="headerVisuel" className="h-full">
          <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
              <source src="../../images/test.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
          </video>
          <div className="absolute top-1/3 w-5/6 xl:w-1/2 px-10">
              <h1 className="text-2xl sm:text-3xl xl:text-5xl 3xl:text-8xl text-white font-primary transition-all ease-in-out duration-500">test</h1>
              <div className="flex items-center mt-5">
                  <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" 
                    viewBox="0 0 67.1 67.05" className=" fill-gold mr-5">
                  <path d="M52.35,62.86H4.19V10.51h29.42l4.23-4.08l-0.11-0.11H4.19C1.87,6.32,0,8.2,0,10.51v52.35
                    c0,2.31,1.87,4.19,4.19,4.19h48.17c2.31,0,4.19-1.87,4.19-4.19V32.19l-4.19,4V62.86L52.35,62.86z M63.8,2.73
                    C61.91,0.92,59.82,0,57.6,0c-3.48,0-6.02,2.25-6.71,2.94C49.9,3.91,22.14,31.63,22.14,31.63c-0.22,0.22-0.38,0.49-0.46,0.8
                    c-0.75,2.78-4.52,15.12-4.56,15.24c-0.19,0.63-0.02,1.32,0.45,1.78c0.33,0.34,0.78,0.51,1.24,0.51c0.18,0,0.36-0.02,0.54-0.08
                    c0.13-0.04,12.86-4.16,14.95-4.78c0.28-0.08,0.53-0.23,0.74-0.43c1.32-1.3,26.84-26.42,28.9-28.56c2.14-2.2,3.2-4.49,3.16-6.81
                    C67.06,7,65.95,4.79,63.8,2.73L63.8,2.73z M60.93,13.18c-1.16,1.2-10.29,10.22-27.12,26.8l-1.29,1.27
                    c-1.93,0.6-6.55,2.08-10.04,3.21c1.12-3.71,2.47-8.2,3.08-10.32c3.6-3.59,27.38-27.34,28.28-28.23c0.18-0.18,1.78-1.72,3.76-1.72
                    c1.12,0,2.21,0.51,3.3,1.57c1.31,1.26,1.99,2.47,2.01,3.6C62.93,10.52,62.26,11.81,60.93,13.18L60.93,13.18z"/>
                  </svg>
                <h3 className=" text-md sm:text-xl xl:text-2xl 3xl:text-4xl text-white font-secondary transition-all ease-in-out duration-500">Facilitez vos démarches après un sinistre</h3>
              </div>
          </div>
          
        </div> */}
        <Header background="home" text="Facilitez vos démarches après un sinistre"/>
        <div className="pb-32"></div>
        <Entites/>
        <div className="pb-32"></div>
        <Carrousel/>
        <div className="pb-32"></div>
        <Equipes/>
        <div className="pb-32"></div>
        <Confiance/>
        <div className="pb-32"></div>
        <Footer/>
    </>
  );
}
export default Home;