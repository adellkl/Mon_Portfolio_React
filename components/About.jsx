import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { RoughNotation } from "react-rough-notation";
import VisibilitySensor from "react-visibility-sensor";

import moi from "../images/Design sans titre (3).png";

import avion from "../images/avion.png"
import boxe from "../images/boxe.png"
import photo from "../images/appareil photo.png"
import musique from "../images/Design sans titre.png"

const About = () => {
    const [isEducationVisible, setEducationVisible] = useState(false);
    const [isExperienceVisible, setExperienceVisible] = useState(false);
    const textRef = useRef(null);

    const animateText = useCallback(() => {
        const text = "Hi, I'm Adel  ";
        let currentText = "";
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex === text.length) {
                clearInterval(interval);
                return;
            }

            currentText += text[currentIndex];
            currentIndex += 1;

            if (textRef.current) {
                textRef.current.textContent = currentText;
            }
        }, 100);
    }, []);

    useEffect(() => {
        animateText();
    }, [animateText]);

    useEffect(() => {
        AOS.init({ duration: 1600 }); // Initialise AOS avec une durée de 1 seconde
        AOS.refresh(); // Rafraîchit AOS après le rendu initial du composant
    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    const handleEducationVisibilityChange = (isVisible) => {
        if (isVisible) {
            setEducationVisible(true);
        }
    };

    const handleExperienceVisibilityChange = (isVisible) => {
        if (isVisible) {
            setExperienceVisible(true);
        }
    };

    return (
        <section id="about" className="my-8 font-serif "> <br />
            <div className="container mx-auto px-6 lg:px-6 relative z-10 h-full overflow-hidden">
                <div className="lg:flex items-center justify-between h-full">
                    <div className="lg:w-1/2 sm:w-full h-full">
                        <div className="h-full lg:max-w-lg mx-auto text-left"> {/* Changement de la classe text-center à text-left */}
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6" ref={textRef}></h2>
                            <RoughNotation>
                                <h2 className="lg:text-xl mb-6">Front-end developer from Paris, France 🇨🇵</h2>
                            </RoughNotation>
                            <p className="leading-relaxed mb-4 mt-6 text-xl"
                            >
                                Je m’appelle Adel Loukal, je suis actuellement étudiant en <strong>BUT MMI</strong> à l’ <strong>IUT de Cergy-Pontoise</strong> et en parcours développement web et dispositifs interactifs dans lequel je m’épanouis  dans lequel je m’épanouis  dans lequel je m’épanouis  dans lequel je m’épanouis.  dans lequel je m’épanouis. dans lequel je m’épanouis.
                            </p>
                            <br />
                            <a className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none  active:text-indigo-500" target="_blank" href="http://aloukal.alwaysdata.net/wp-content/uploads/2023/05/CV-2022-2023-1.pdf">
                                <span className="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>
                                <span className="relative block border border-black bg-white px-8 py-3">mon CV</span>
                            </a>
                        </div>
                    </div> <br />
                    <VisibilitySensor onChange={handleEducationVisibilityChange}>
                        <div className="lg:w-1/2 sm:w-full h-full flex justify-center lg:justify-end "
                            className={`${isEducationVisible ? "animate-fade-in-right" : "opacity-0"
                                } transition-opacity duration-700`} >
                            <div className="w-full lg:max-w-xl hidden lg:block mt-8"> {/* Ajout de la classe mt-8 */}
                                <Image src={moi} alt="photo de adel" className="w-full h-auto object-contain" />
                            </div>
                        </div>
                    </VisibilitySensor>
                </div>
            </div>


            <section className="py-20 lg:py-48 my-2">
                <div className="container mx-auto px-6 lg:px-20 rounded-lg">
                    {/* Ligne chronologique */}
                    <div className="flex justify-center flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <VisibilitySensor onChange={handleEducationVisibilityChange}>
                                <div
                                    className={`${isEducationVisible ? "animate-fade-in-right" : "opacity-0"
                                        } transition-opacity duration-1000`}
                                >
                                    <h4 className="text-2xl font-bold mb-4">Parcours universitaire</h4>
                                    <div className="border-l-4 border-gray-600 pl-4 py-2">
                                        <h4 className="text-xl font-medium">2021 - Présent</h4>
                                        <p className="text-gray-600">BUT MMI à l'IUT de Cergy-Pontoise</p>
                                        <p className="text-gray-400">Le BUT Métiers du Multimédia et de l'Internet (MMI) est une formation de niveau bac+2 axée sur les métiers du numérique. Les étudiants y acquièrent des compétences polyvalentes en développement web, design graphique, communication digitale et création de contenus multimédias. Cette formation les prépare à travailler dans des entreprises du secteur du numérique ou à entreprendre dans ce domaine en constante évolution.</p>
                                    </div>
                                    <div className="border-l-4 border-black-200 pl-4 py-2">
                                        <h4 className="text-xl font-medium">2019 - 2021</h4>
                                        <p className="text-gray-600">Bac technologique (STMG) au lycée Germaine Tillion</p>
                                        <p className="text-gray-400">
                                            Le Bac STMG (Sciences et Technologies du Management et de la Gestion) est un diplôme de l'enseignement technologique qui vise à former des étudiants dans les domaines du management, de la gestion, de l'économie et du droit, leur permettant d'acquérir des compétences polyvalentes pour évoluer dans le monde professionnel.</p>
                                    </div>
                                </div>
                            </VisibilitySensor>
                        </div>

                        {/* Expériences professionnelles */}
                        <div className="w-full lg:w-1/2 lg:ml-4 mt-8 lg:mt-0">
                            <VisibilitySensor onChange={handleExperienceVisibilityChange}>
                                <div
                                    className={`${isExperienceVisible ? "animate-fade-in-right" : "opacity-0"
                                        } transition-opacity duration-1000`}
                                >
                                    <h4 className="text-2xl font-bold mb-4">Expériences professionnelles</h4>
                                    <div className="border-l-4 border-gray-600 pl-4 py-2">
                                        <h4 className="text-xl font-medium">Stage de 5 mois en Assistant chef de projet UI/Ux design //Avril-Aout 2023</h4>
                                        <p className="text-gray-600"><strong>ISCOM Paris</strong></p>
                                        <p className="text-gray-400">Ma mission consiste en la maintenance de l'application Iscom Anytime qui permets au étudiants de suivre des modules et articles des intervenant de l'école</p>
                                    </div>
                                    <div className="border-l-4 border-black-200 pl-4 py-2">
                                        <h4 className="text-xl font-medium">
                                            Agent d’accueil // Fevrier-Mars 2017</h4>
                                        <p className="text-gray-600"><strong>B&B Hotels France</strong></p>
                                        <p className="text-gray-400">J’étais chargé d’accueillir les clients, de les enregistrer dans la base de données, de vérifier leurs réservations. <br /> J'avais également pour mission de veiller au bon fonctionnement des outils d'enregistrement des clients.</p>
                                    </div>

                                    {/* Ajoutez d'autres expériences professionnelles ici */}
                                </div>
                            </VisibilitySensor>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" my-2" >
                <div className="container mx-auto px-6 lg:px-20" >
                    <h1 className="text-3xl font-serif font-bold mb-4">Hobbies</h1>

                    <div className="flex flex-wrap">
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8" data-aos="fade-left">
                            <div className="max-w-xs bg-white rounded-lg p-4 shadow animate-fade-in-left">
                                <Image src={boxe} alt="Hobby 1" width={200} height={200} />
                                <h4 className="text-xl font-bold mt-4 mb-2">Sport</h4>
                                <p className="text-gray-600">
                                    Le sport me permet d'exterioriser et de penser a autre chose mais aussi de me canaliser.
                                </p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8" data-aos="fade-left">
                            <div className="max-w-xs bg-white rounded-lg p-4 shadow animate-fade-in-left">
                                <Image src={avion} alt="Hobby 2" width={250} height={200} />
                                <h4 className="text-xl font-bold mt-4 mb-2">Voyages</h4>
                                <p className="text-gray-600">
                                    Voyager me permet de passer des moment inoubliables avec ma famille.
                                </p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8" data-aos="fade-left">
                            <div className="max-w-xs bg-white rounded-lg p-4 shadow animate-fade-in-left">
                                <Image src={photo} alt="Hobby 3" width={250} height={200} />
                                <h4 className="text-xl font-bold mt-4 mb-2">Photographie</h4>
                                <p className="text-gray-600">
                                    La photographie est l'une de mes passions, j'aime prendre de belles photos.
                                </p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8" data-aos="fade-left">
                            <div className="max-w-xs bg-white rounded-lg p-4 shadow animate-fade-in-in-left">
                                <Image src={musique} alt="Hobby 3" width={250} height={200} />
                                <h4 className="text-xl font-bold mt-4 mb-2">La musique </h4>
                                <p className="text-gray-600">
                                    La musique va avec le sport donc naturellement j'ecoute de la musique.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    );
};

export default About;