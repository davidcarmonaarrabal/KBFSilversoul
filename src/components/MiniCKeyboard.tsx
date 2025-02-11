"use client";

import React, { useEffect, useState } from "react";
import { MousePointerClick, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Loader from "./Loader";
import { motion, AnimatePresence } from "framer-motion"; // Importamos Framer Motion

interface KeyboardData {
    name: string;
    switches: string;
    base: string;
    keycaps: string;
    keycapsn: number;
    descriptions: string;
    descriptionl: string;
    img: string;
    web: string;
    size: string;
    region: string;
}

const MiniCKeyboard: React.FC = () => {
    const [keyboardData, setKeyboardData] = useState<KeyboardData[]>([]);
    const [currentKeyboardIndex, setCurrentKeyboardIndex] = useState<number>(0);
    const [autoPlay, setAutoPlay] = useState<boolean>(true);
    const [direction, setDirection] = useState<number>(1); // Dirección de la animación

    useEffect(() => {
        fetch("https://sendemail-3fujvy5ywq-uc.a.run.app/keyboards")
            .then((response) => response.json())
            .then((data) => setKeyboardData(data))
            .catch((error) => console.error("Error fetching keyboard data:", error));
    }, []);

    useEffect(() => {
        if (!autoPlay) return;

        const intervalId = setInterval(() => {
            setDirection(1);
            setCurrentKeyboardIndex((prevIndex) => (prevIndex + 1) % keyboardData.length);
        }, 10000);

        return () => clearInterval(intervalId);
    }, [keyboardData, autoPlay]);

    if (keyboardData.length === 0) {
        return <div className="text-black text-2xl"><Loader /></div>;
    }

    const handleNext = () => {
        setAutoPlay(false);
        setDirection(1);
        setCurrentKeyboardIndex((prevIndex) => (prevIndex + 1) % keyboardData.length);
    };

    const handlePrev = () => {
        setAutoPlay(false);
        setDirection(-1);
        setCurrentKeyboardIndex((prevIndex) => (prevIndex - 1 + keyboardData.length) % keyboardData.length);
    };

    const selectKeyboard = (index: number) => {
        setAutoPlay(false);
        setDirection(index > currentKeyboardIndex ? 1 : -1);
        setCurrentKeyboardIndex(index);
    };

    return (
        <div className="relative flex flex-col items-center text-black">
            {/* Botón Anterior */}
            <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-yellow-200 p-2 rounded-md hover:bg-yellow-300 border-black border-2"
            >
                <ChevronLeft size={30} />
            </button>

            {/* Contenedor de la animación */}
            <div className="overflow-hidden w-[345px] sm:w-[615px] md:w-[740px] lg:w-[1000px] xl:w-[1240px] 2xl:w-[1500px] ml-10 mr-10">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentKeyboardIndex}
                        initial={{ x: direction * 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -direction * 100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="bg-white border-black border-4 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)] flex flex-col m-6 lg:flex-row text-black"
                    >
                        {/* Imagen */}
                        <div className="m-2 flex flex-col items-center justify-center">
                            <Link href={keyboardData[currentKeyboardIndex].web}>
                                <Image
                                    src={keyboardData[currentKeyboardIndex].img || '/img/maintenance.png'}
                                    alt="Keyboard Image"
                                    width={300}
                                    height={300}
                                    className="border-black border-2 rounded-md sm:w-[500px] sm:h-[500px]
                  md:w-[600px] md:h-[600px] lg:w-[500px] lg:h-[500px] 2xl:w-[650px]
                  2xl:h-[500px] hover:cursor-pointer"
                                />
                            </Link>
                        </div>

                        {/* Detalles */}
                        <div className="m-2 items-center justify-center flex flex-col 2xl:ml-5 text-black">
                            <ul className="flex flex-col justify-center items-center lg:items-start lg:mt-8 xl:mt-10 lg:w-[500px] xl:w-[590px] 2xl:w-[950px]">
                                <li className="text-2xl xl:text-4xl">Name: {keyboardData[currentKeyboardIndex].name}</li>
                                <li className="xl:text-2xl">Switches: {keyboardData[currentKeyboardIndex].switches}</li>
                                <li className="xl:text-2xl">Base: {keyboardData[currentKeyboardIndex].base}</li>
                                <li className="xl:text-2xl">Keycaps: {keyboardData[currentKeyboardIndex].keycaps}</li>
                                <li className="mt-3 xl:text-2xl">{keyboardData[currentKeyboardIndex].descriptions}</li>
                            </ul>
                            <div className="lg:mt-auto flex justify-center items-center text-black">
                                <Link href={keyboardData[currentKeyboardIndex].web}>
                                    <button className="bg-yellow-200 p-2 rounded-lg border-black border-2 flex flex-col items-center justify-center mt-4 
                  hover:bg-yellow-300 transition duration-300 hover:cursor-pointer">
                                        <MousePointerClick />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Botón Siguiente */}
            <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-200 p-2 rounded-md hover:bg-yellow-300 border-black border-2"
            >
                <ChevronRight size={30} />
            </button>

            {/* Indicadores de paginación */}
            <div className="flex justify-center mt-4 space-x-2 mb-4">
                {keyboardData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => selectKeyboard(index)}
                        className={`w-3 h-3 rounded-full transition ${index === currentKeyboardIndex ? "bg-black" : "bg-yellow-400 hover:bg-yellow-600"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default MiniCKeyboard;
