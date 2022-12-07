import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "./components/Modal";

const Hero = ({ setBgImage }) => {

    const { pathname } = useLocation();
    setBgImage(pathname);

    const [showModal, setShowModal] = useState(false);
    const handleModal = () => setShowModal(false);

    const [isLoginTab, setIsLoginTab] = useState(false);

    return (
        <div className="text-white w-full h-[80vh] flex flex-col justify-center items-center text-center overflow-y-hidden">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Swipe Right, Start Fights</h1>
            <div className="flex flex-col justify-evenly h-1/3 md:h-1/3 lg:text-lg md:font-medium">
                <button 
                    onClick={() => {
                        setShowModal(true);
                        setIsLoginTab(false);
                    }}
                    className="bg-white text-black p-3 2xl:p-4 rounded-lg shadow-md transition grow-transition">
                    Create Account
                </button>
                <button
                    onClick={() => {
                        setShowModal(true);
                        setIsLoginTab(true);
                    }}
                    className="p-3 2xl:p-4 rounded-lg shadow-md border grow-transition"
                >
                    Log In
                </button>
            </div>
            {showModal && <Modal onClose={handleModal} isLoginTab={isLoginTab} toggleTab={setIsLoginTab} />}
        </div>
    );
}

export default Hero;