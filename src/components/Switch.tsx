"use client";

import Image from "next/image";
import Link from "next/link";
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
    url: string;
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
        <Link href={switchData?.url || 'https://davidca.es/'} target="_blank">
            <div className="bg-yellow-200 border-black border-2 rounded-xl flex flex-col 
            items-center justify-center shadow-[5px_5px_0px_rgba(0,0,0,0.1)] mt-4
            sm:flex-row hover:bg-yellow-300 transition duration-300 hover:cursor-pointer">
                <div>
                    <Image src={switchData?.img || '/img/maintenance.png'} 
                    alt="Switch Image" width={300} height={300}></Image>
                </div>
                <div className="sm:ml-4 xl:text-2xl">
                    <p><strong>Switch name:</strong> {switchData?.name}</p>
                    <p><strong>Switch type:</strong> {switchData?.type}</p>
                    <p><strong>Operating force:</strong> {switchData?.operating_force}</p>
                    <p><strong>Total travel:</strong> {switchData?.total_travel}</p>
                    <p><strong>Pre travel:</strong> {switchData?.pre_travel}</p>
                    <p><strong>Tactile position:</strong> {switchData?.tactile_position}</p>
                    <p><strong>Tactile force:</strong> {switchData?.tactile_force}</p>
                    <p><strong>Unit price:</strong> {switchData?.price_u}€/unit</p>
                    <p><strong>Silent?</strong> {switchData?.silent ? "Yes" : "No"}</p>
                </div>
            </div>
        </Link>
    );
};

export default Switch;
