import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for demonstration purposes
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Clean up the timeout on component unmount
    return () => clearTimeout(delay);
  }, []);

  return (
    <section>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-20 w-20 md:h-32 md:w-32 border-t-2 border-b-2 border-gray-900"></div>
            <div className="mt-4 text-xl md:text-4xl">Chargement du portfolio...<span className="loader-dots"></span></div>
          </div>
        </div>
      ) : (
        <div>
          {/* Contenu de la page d'accueil */}
        </div>
      )}
    </section>
  );
};

export default HomePage;
