"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

// Definimos la interfaz SwitchData.
interface SwitchData {
    name: string;
    type: string;
    operating_force: string;
    total_travel: string;
    pre_travel: string;
    tactile_position: string;
    tactile_force: string;
    price_u: number;
    silent: boolean;
    img: string;
}

interface SwitchProps {
    switchId: number;
}

const Switch: React.FC<SwitchProps> = ({ switchId }) => {

    const [switchData, setSwitchData] = useState<SwitchData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSwitchData = async () => {
            try {
                console.log(`Fetching data for switchId: ${switchId}`);
                const response = await fetch(`https://sendemail-3fujvy5ywq-uc.a.run.app/switch?id=${switchId}`);
                
                if (!response.ok) {
                    throw new Error("Error obtaining data...");
                }

                const data: SwitchData[] = await response.json(); 
                setSwitchData(data[0]);
            } catch (error: unknown) {  
                if (error instanceof Error) {
                    setError(error.message);  
                } else {
                    setError("Unknown error");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchSwitchData();
    }, [switchId]); // El efecto se ejecuta cuando el `switchId` cambia

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="bg-yellow-200 border-black border-2 rounded-xl flex flex-col 
        items-center justify-center shadow-[5px_5px_0px_rgba(0,0,0,0.1)]">
            <div>
                <Image src={switchData?.img || '/img/maintenance.png'} 
                alt="Switch Image" width={300} height={300}></Image>
            </div>
            <div>
                <h1>Switch name: {switchData?.name}</h1>
                <p>Switch type: {switchData?.type}</p>
                <p>Operating force: {switchData?.operating_force}</p>
                <p>Total travel: {switchData?.total_travel}</p>
                <p>Pre travel: {switchData?.pre_travel}</p>
                <p>Tactile position: {switchData?.tactile_position}</p>
                <p>Tactile force: {switchData?.tactile_force}</p>
                <p>Unit price: {switchData?.price_u}€</p>
                <p>Silent? {switchData?.silent ? "Yes" : "No"}</p>
            </div>
        </div>
    );
};

export default Switch;
