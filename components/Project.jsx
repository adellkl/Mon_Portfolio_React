import React, { Component } from "react";
import { RoughNotation } from "react-rough-notation";
import imageData from "./imagesData";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repositories: null,
            showCards: [],
        };
    }
    componentDidMount() {
        setTimeout(() => {
            const cards = imageData.map(() => false);
            this.setState({ repositories: imageData, showCards: cards }, () => {
                this.animateCards();
                AOS.init(); // Initialisation de AOS
            });
        }, 470);
    }

    animateCards() {
        const { showCards } = this.state;
        imageData.forEach((_, index) => {
            setTimeout(() => {
                showCards[index] = true;
                this.setState({ showCards: showCards });
                AOS.refresh();
            }, index * 200);
        });
    }

    render() {
        const { repositories, showCards } = this.state;

        if (!repositories || repositories.length === 0) {
            return (
                <div className="flex items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-20 w-20 md:h-32 md:w-32 border-t-2 border-b-2 border-gray-900"></div>
                    <div className="ml-4 text-xl md:text-4xl">Chargement des projets...</div>
                </div>
            );
        }

        return (
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <section>
                    <div className="py-4">
                        <span className="flex justify-center">
                            voir plus de projets sur : {" "}
                            <RoughNotation
                                type="highlight"
                                show={true}
                                padding={19}
                                color="#D4DCA9"
                            >
                                <a
                                    href="https://github.com/adellkl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=""
                                >
                                    mon Github
                                </a>{" "}
                            </RoughNotation>
                        </span>
                    </div>

                    <br />
                    <br />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {repositories.map((repo, index) => (
                            <div
                                key={repo.name}
                                className={`group relative block bg-black transition-all duration-1000 ${showCards[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}

                            >
                                <img
                                    alt="Developer"
                                    src={imageData[index].imageSrc}
                                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                />
                                <img
                                    alt="Developer Hover"
                                    src={imageData[index].hoverImageSrc}
                                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity group-hover:opacity-90"
                                />

                                <div className="relative p-4 sm:p-6 lg:p-8">
                                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                        Nom du projet
                                    </p>

                                    <p className="text-xl font-bold text-white sm:text-2xl">
                                        {repo.name}
                                    </p>

                                    <div className="mt-32 sm:mt-48 lg:mt-64">
                                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                            <p className="text-sm text-white">
                                                {imageData[index].description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-white">
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            Voir le projet
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br /><br />
                </section>
            </div>
        );
    }
}

export default Projects;
