import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Durée de l'animation en millisecondes
            once: true, // Animation se déclenche une seule fois
        });
    }, []);

    return (
        <section>
            {/* Container for demo purpose */}
            <div className="container my-24 mx-auto md:px-6">
                {/* Section: Design Block */}
                <section className="mb-32">
                    <div
                        className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"
                        data-aos="fade-in"
                        data-aos-duration="800"
                        data-aos-delay="100"
                    ></div>
                    <div className="container px-6 md:px-12">
                        <div
                            className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]"
                            data-aos="fade-in"
                            data-aos-duration="800"
                            data-aos-delay="200"
                        >
                            <div className="flex flex-wrap">
                                <div className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 4a10 10 0 00-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 00-10-10zm0 0v0"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19 11a7.003 7.003 0 01-7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                                Adresse
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                34 Bd Henri Bergson, 95200 Sarcelles France
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 4a10 10 0 00-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 00-10-10zm0 0v0"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19 11a7.003 7.003 0 01-7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                                Téléphone
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                +33 7 69 12 01 66
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 13l-5 5L6 9l5-5L21 13zm-8-2v6"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                                Email
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Adelloukal2@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Contact;

