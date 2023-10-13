import Carrousel from "../components/Carousel";
import Confiance from "../components/Confiance";
import Entites from "../components/Entites";
import Equipes from "../components/Equipes";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {

  return (
    <>
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