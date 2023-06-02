import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import logoImage from "../images/Capture d’écran 2023-05-22 à 15.00.52.png";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setMounted(true);
    setActivePage(window.location.pathname);
  }, []);

  const transition = { duration: 0.3, ease: "easeInOut" };

  return (
    <div>
      <div className="max-w-6xl mx-auto px-9 py-9 md:py-4">
        <div className="flex md:flex-row justify-between items-center">
          <div className="flex flex-col">
            <Link href="/">
              <Image
                src={logoImage}
                alt="Logo"
                width={0}
                height={56}
              />
            </Link>
          </div>

          {/* Menu principal */}
          <div className="space-x-9 hidden md:block">

            <Link
              className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg ${activePage === "/about" ? "bg-gray-700 text-white" : ""}`}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg ${activePage === "/projects" ? "bg-gray-700 text-white" : ""}`}
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg ${activePage === "/contact" ? "bg-gray-700 text-white" : ""}`}
              href="/contact"
            >
              Contact
            </Link>
          </div>

          {/* Menu burger pour téléphone */}
          <div className="space-x-4 flex flex-row items-center">
            <div className="space-x-8 flex justify-center md:hidden mt-0">

              <button
                className="text-gray-600 dark:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                onClick={() => setMenuOpen(!isMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "100vh" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={transition}
                    className="md:hidden absolute right-0 top-0 z-50 bg-opacity-70 backdrop-filter backdrop-blur-md rounded-md shadow-lg py-2 px-4"
                    style={{ width: '100%' }}
                  >
                    <button
                      className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                      onClick={() => setMenuOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button> <br />
                    <div className="flex flex-col justify-center items-center space-y-4">

                      <Link
                        className={`block py-2 px-4 text-lg ${activePage === "/about" ? "bg-gray-700 text-white" : ""}`}
                        href="/about"
                      >
                        About
                      </Link>
                      <Link
                        className={`block py-2 px-4 text-lg ${activePage === "/projects" ? "bg-gray-700 text-white" : ""}`}
                        href="/projects"
                      >
                        Projects
                      </Link>
                      <Link
                        className={`block py-2 px-4 text-lg ${activePage === "/contact" ? "bg-gray-700 text-white" : ""}`}
                        href="/contact"
                      >
                        Contact
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
