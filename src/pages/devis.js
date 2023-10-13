import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

function Devis() {

    const [fileName, setFileName] = useState('Choisissez votre fichier...');

    const handleFileChange = (e) => {
        setFileName(e.target.files[0].name);
    }

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <section id="devis" className="grid grid-cols-1 sm:grid-cols-2 h-screen items-center">
                {/* Partie gauche formulaire */}
                <div className="p-20">
                    <h1 className="font-primary uppercase text-center text-4xl font-bold mb-4 tracking-wide">Demandez votre devis</h1>
                    <p className="font-secondary text-center">Une réponse vous sera faites sous 48 heures</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-20 grid grid-cols-2 gap-x-20">
                            {/* Champ Prénom */}
                            <div className="relative w-full min-w-[200px] h-11 flex flex-col">
                                <input 
                                    name="prenom" 
                                    className="peer bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-tertiary-200 text-sm pt-4 pb-1.5 border-blue-gray-200 w-full" 
                                    placeholder=" "
                                    {...register("prenom", { required: true })}
                                />
                                <label 
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-black leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content[''] after:block after:w-full after:absolute after:-bottom-1.5 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.25] text-gray-500 peer-focus:text-tertiary-400 after:border-gray-500 peer-focus:after:border-primary">Prénom 
                                </label>
                                {errors.prenom && <span className="text-[#BE1622]">Le champ prénom est requis</span>}
                            </div>
                            {/* Champ Nom  */}
                            <div className="relative w-full min-w-[200px] h-11 flex flex-col">
                                <input 
                                    name="nom" 
                                    className="peer bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-tertiary-200 text-sm pt-4 pb-1.5 border-blue-gray-200 w-full" 
                                    placeholder=" "
                                    {...register("nom", { required: true })}
                                />
                                <label 
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-black leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content[''] after:block after:w-full after:absolute after:-bottom-1.5 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.25] text-gray-500 peer-focus:text-tertiary-400 after:border-gray-500 peer-focus:after:border-primary">Nom 
                                </label>
                                {errors.nom && <span className="text-[#BE1622]">Le champ nom est requis</span>}
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-x-20">
                            {/* Champ Adresse mail  */}
                            <div className="relative w-full min-w-[200px] h-11 flex flex-col">
                                <input 
                                    name="mail" 
                                    className="w-full peer bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-tertiary-200 text-sm pt-4 pb-1.5 border-blue-gray-200" 
                                    placeholder=" "
                                    {...register("mail", { required: true })}
                                />
                                <label 
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-black leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content[''] after:block after:w-full after:absolute after:-bottom-1.5 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.25] text-gray-500 peer-focus:text-tertiary-400 after:border-gray-500 peer-focus:after:border-primary">Adresse mail 
                                </label>
                                {errors.mail && <span className="text-[#BE1622]">Le champ mail est requis</span>}
                            </div>
                            {/* Champ Téléphone  */}
                            <div className="relative w-full min-w-[200px] h-11 flex flex-col">
                                <input 
                                    name="telephone" 
                                    className="w-full peer bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-tertiary-200 text-sm pt-4 pb-1.5 border-blue-gray-200" 
                                    placeholder=" "
                                    {...register("telephone", { required: true })}
                                />
                                <label 
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-black leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content[''] after:block after:w-full after:absolute after:-bottom-1.5 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.25] text-gray-500 peer-focus:text-tertiary-400 after:border-gray-500 peer-focus:after:border-primary">Téléphone 
                                </label>
                                {errors.telephone && <span className="text-[#BE1622]">Le champ téléphone est requis</span>}
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-1">
                            {/* Champ Votre société  */}
                            <div className="relative w-full min-w-[200px] h-11 flex flex-col">
                                <input 
                                    name="societe" 
                                    className="w-full peer bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-tertiary-200 text-sm pt-4 pb-1.5 border-blue-gray-200" 
                                    placeholder=" "
                                    {...register("societe", { required: true })}
                                />
                                <label 
                                    className="flex w-full  h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-black leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content[''] after:block after:w-full after:absolute after:-bottom-1.5 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.25] text-tertiary-200 peer-focus:text-tertiary-400 after:border-tertiary-200 peer-focus:after:border-primary">Votre société 
                                </label>
                                {errors.societe && <span className="text-[#BE1622]">Le champ société est requis</span>}
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-1 mb-14">
                            {/* Champ Message  */}
                            <div className="mt-2 mb-5">
                                <div className="relative w-full min-w-[200px] flex flex-col">
                                    <textarea 
                                        name="message" 
                                        className="peer w-full h-full min-h-[100px] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none transition-all border-b placeholder-shown:border-tertiary-200 text-sm pt-4 pb-1.5 border-blue-gray-200 focus:border-primary !resize-none" 
                                        placeholder=" "
                                        {...register("message", { required: true })}
                                    >
                                    </textarea>
                                    <label 
                                        className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-black leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content[' '] after:block after:w-full after:absolute after:-bottom-0 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.25] text-gray-500 peer-focus:text-tertiary-400 after:border-tertiary-200 peer-focus:after:border-primary">Message
                                    </label>
                                </div>
                                {errors.message && <span className="text-[#BE1622]">Il faut renseigner votre message</span>}
                            </div>
                        </div>

                        <div className="border-tertiary-200 border-2 flex flex-col aligns-center items-center p-10 mb-10 text-center">
                            {/* Champ joindre un fichier */}
                            <input 
                                type="file" 
                                name="file-5[]" 
                                id="file-5" 
                                className="w-[0.1] h-[0.1] opacity-0 overflow-hidden absolute -z-index-10" 
                                onChange={handleFileChange}
                            />
                            <label htmlFor="file-5" className="text-tertiary-400 max-w-[80%] text-xl text-ellipsis inline-blocks overflow-hidden whitespace-nowrap cursor-pointer">
                                <svg version="1.1" id="Calque_1"viewBox="0 0 38 39" className="h-10 w-10 m-auto">
                                    <path className="fill-none stroke-[#006289] stroke-2" d="M3.8,20.2V32c0,1.9,1.5,3.4,3.4,3.4h23.6c1.9,0,3.4-1.5,3.4-3.4V20.2"/>
                                    <polyline className="fill-none stroke-[#006289] stroke-2" points="12.1,10.8 19,4 25.9,10.8 "/>
                                    <line className="fill-none stroke-[#006289] stroke-2" x1="19" y1="26.9" x2="19" y2="7.6"/>
                                </svg>
                                <span>{fileName}</span>
                            </label>
                        </div>

                        <button type="submit" className="w-full uppercase text-white tracking-widest bg-primary px-5 py-5 m-auto block">envoyer</button>
                    </form>
                </div>
                {/* Partie droite image */}
                <div className="relative h-full hidden sm:block">
                    <img className="absolute w-full h-full object-cover" src="../images/BG_devis.png" alt="devis" />
                </div>
            </section>
            <NavLink to="/site-determinant">
                <img className="z-10 absolute right-6 top-6 h-12 sm:h-16 w-12 sm:w-16 bg-primary sm:bg-gold rounded-full p-4 cursor-pointer transition-all duration-200 ease-in-out" src="../images/cross-close.svg" alt="close button" />
            </NavLink>
        </>
    )
}
export default Devis;