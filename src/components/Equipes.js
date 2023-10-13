import { useState } from "react";
import { datas } from "../datas";

function Equipes() {

  const photos = datas.equipes;

    
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const [showMembers, setShowMembers] = useState({}); // Initial state is an empty object

  function toggleMembres(teamKey) {
    setShowMembers({...showMembers, [teamKey]: !showMembers[teamKey]}); 
    // spread the current state into a new object and toggle the value for the teamKey
  }

    return (
        <section id="equipes">
          {/* Titre général */}
          <div className="flex justify-center">
            <h1 className="font-primary text- uppercase text-center text-4xl sm:text-5xl pb-5 border-b-4 border-primary tracking-widest transition-all ease-in-out duration-500">nos équipes</h1>
          </div>

          {/* Blocs paragraphe d'introduction */}
          <div className="flex flex-col sm:flex-row justify-center w-full px-10 sm:px-0 mt-16">
            <p className="text-tertiary-400 text-xl">Une équipe d’ingénieurs et d’économistes hautement qualifiés, est dédiée à chaque nouveau dossier, en fonction de ses spécialités.</p>
          </div>

          {/* menus déroulants équipes */}
          <div className="all-menus font-secondary">
            {Object.keys(photos).map((teamKey) => {
              const team = photos[teamKey];
              
              return (
                <div key={teamKey}>
                  <div className="menu border-2 border-tertiary-300 rounded-full w-2/3 m-auto flex justify-between p-8 mt-8">
                    <h3 className="menu-title text-2xl">{team.label}</h3>
                    <svg 
                      version="1.1" 
                      id="Calque_1" 
                      xmlns="http://www.w3.org/2000/svg"  
                      x="0px" y="0px" 
                      viewBox="0 0 80.31 80.31" 
                      className={`${showMembers[teamKey] ? 'transform rotate-0' : 'transform rotate-180'} h-10 w-10 cursor-pointer transition-all ease-in-out duration-500`}
                      onClick={() => toggleMembres(teamKey)}
                    >
                      <circle className="fill-none stroke-primary stroke-2" cx="40.16" cy="40.16" r="37.5"/>
                      <g id="Page-1_00000142869586191479576460000010369257938184970631_">
                        
                          <g id="Dribbble-Light-Preview_00000158010157693620559400000004218530804408310424_" transform="translate(-260.000000, -6684.000000)">
                          <g id="icons_00000009575001340261231380000011608020532820401544_" transform="translate(56.000000, 160.000000)">
                            <path id="arrow_x5F_up-_x5B__x23_337_x5D__00000160161628800022313960000008871075425653900182_"  className="fill-primary"  d="M260.36,6572.75
                              L260.36,6572.75c0.66-0.69,0.66-1.79,0-2.48l-13.98-14.48c-1.32-1.37-3.46-1.37-4.78,0l-14.08,14.59
                              c-0.65,0.68-0.66,1.77-0.02,2.46c0.66,0.7,1.74,0.71,2.41,0.02l12.88-13.35c0.66-0.68,1.73-0.68,2.39,0l12.78,13.25
                              C258.63,6573.43,259.7,6573.43,260.36,6572.75"/>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>

                  {showMembers[teamKey] && (
                    <div className="w-full sm:w-2/3 m-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-20">
                      {team.membres.map((person, index) => (
                        <div className="menu-direction pt-10 slide-down" key={index}>
                          <img src={person.photo} alt={`${person.nom} ${person.prenom}`} className="w-full px-10 m-auto"/>
                          <p className="text-center font-bold text-black">{capitalizeFirstLetter(person.nom)} <span className="uppercase">{person.prenom}</span></p>
                          <p className="text-center text-tertiary-400">{person.job}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* encart */}
          <div className="bg-primary rounded-full w-2/3 m-auto flex flex-col sm:flex-row text-center sm:text-left justify-center items-center p-10 mt-10">
            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 104.75 78.64" className="h-14 w-14 mr-0 sm:mr-10">
            <g>
              <path className="fill-white" d="M21.46,26.06c0-10.98,8.9-19.89,19.89-19.89c10.98,0,19.89,8.9,19.89,19.89c0,10.98-8.9,19.89-19.89,19.89
                C30.36,45.95,21.46,37.04,21.46,26.06z"/>
              <path className="fill-white" d="M62.85,37.39c-0.2,0.38-0.12,0.86,0.23,1.11c2.57,1.9,5.75,3.03,9.19,3.03c8.54,0,15.47-6.92,15.47-15.47
                S80.82,10.6,72.27,10.6c-3.44,0-6.62,1.13-9.19,3.03c-0.35,0.26-0.43,0.73-0.23,1.11c1.78,3.38,2.79,7.24,2.79,11.33
                S64.64,34.01,62.85,37.39z"/>
              <path className="fill-white" d="M19.87,53.46c5.45-2.36,12.59-3.09,21.47-3.09c8.89,0,16.04,0.73,21.49,3.1c5.93,2.58,9.54,6.98,11.43,13.18
                c0.89,2.91-1.3,5.82-4.31,5.82H12.74c-3.01,0-5.2-2.91-4.31-5.83C10.32,60.43,13.93,56.03,19.87,53.46z"/>
              <path className="fill-white" d="M64.84,46.11c-1.83,0.11-1.94,2.57-0.26,3.3l0,0c4.61,2,8.07,4.95,10.56,8.72c2.04,3.09,5.21,5.5,8.91,5.5
                h7.87c3.13,0,5.41-3.11,4.31-6.14c-0.06-0.17-0.13-0.35-0.2-0.52c-1.51-3.82-4.11-6.63-7.95-8.43c-3.61-1.68-8.12-2.38-13.44-2.59
                l-0.09,0h-0.09C71.35,45.95,68.08,45.91,64.84,46.11z"/>
            </g>
            </svg>
            <p className="text-white font-secondary italic text-xl">Nos experts sont à votre disposition pour toutes questions, n’hésitez pas à nous contacter, nous serons ravis de pouvoir vous renseigner.</p>
          </div>
        </section>
    );
}
export default Equipes;