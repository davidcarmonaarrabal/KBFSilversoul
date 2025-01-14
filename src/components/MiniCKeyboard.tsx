"use client"

import React, { useEffect, useState } from "react";
import { MousePointerClick } from "lucide-react";
import Image from "next/image";

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

    useEffect(() => {
        fetch("https://sendemail-3fujvy5ywq-uc.a.run.app/keyboards")
            .then((response) => response.json())
            .then((data) => {
                setKeyboardData(data);
            })
            .catch((error) => console.error("Error fetching keyboard data:", error));
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentKeyboardIndex((prevIndex) => {
                return (prevIndex + 1) % keyboardData.length;
            });
        }, 10000); 

        return () => clearInterval(intervalId);
    }, [keyboardData]);

    if (keyboardData.length === 0) {
        return <div>Loading...</div>;
    }

    const currentKeyboard = keyboardData[currentKeyboardIndex];

    return (
        <div className='bg-white border-black border-4 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)] w-[345px] sm:w-[615px] 
        md:w-[740px] lg:w-[1000px] xl:w-[1240px] 2xl:w-[1500px] flex flex-col m-6 lg:flex-row text-black'>
            <div className="m-2 flex flex-col items-center justify-center">
                <Image 
                    src={currentKeyboard.img || '/img/maintenance.png'} 
                    alt="Keyboard Image" 
                    width={300} 
                    height={300} 
                    className="border-black border-2 rounded-md sm:w-[500px] sm:h-[500px]
                    md:w-[600px] md:h-[600px] lg:w-[500px] lg:h-[500px] 2xl:w-[650px]
                    2xl:h-[650px]"
                />
            </div>
            <div className="m-2 items-center justify-center flex flex-col 2xl:ml-5 text-black">
                <ul className="flex flex-col justify-center items-center lg:items-start lg:mt-8
                xl:mt-10">
                    <li className="text-2xl xl:text-4xl">Name: {currentKeyboard.name}</li>
                    <li className="xl:text-2xl">Switches: {currentKeyboard.switches}</li>
                    <li className="xl:text-2xl">Base: {currentKeyboard.base}</li>
                    <li className="xl:text-2xl">Keycaps: {currentKeyboard.keycaps}</li>
                    <li className="mt-3 xl:text-2xl">{currentKeyboard.descriptions}</li>
                </ul>
                <div className="lg:mt-auto flex justify-center items-center text-black">
                    <button className="bg-yellow-200 p-2 rounded-lg border-black
                    border-2 flex flex-col items-center justify-center mt-4
                    hover:bg-yellow-300 transition duration-300">
                        <MousePointerClick />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MiniCKeyboard;
