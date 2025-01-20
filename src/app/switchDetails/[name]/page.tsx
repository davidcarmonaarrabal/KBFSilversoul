"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Switch {
    name: string;
    type: string;
    operating_force: string;
}

export default function SwitchDetails() {
    const router = useRouter();
    const { name } = router.query;

    // Estado con tipos explícitos
    const [switchData, setSwitchData] = useState<Switch | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (name) {
            fetch(`https://sendemail-3fujvy5ywq-uc.a.run.app/switch?name=${name}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Error obtaining data.');
                    }
                    return response.json();
                })
                .then((data) => setSwitchData(data)) 
                .catch((err) => setError(err.message));
        }
    }, [name]);

    if (error) return <div>Error: {error}</div>;
    if (!switchData) return <div>Loading...</div>;

    return (
        <div className="flex flex-col m-4">
            <h1 className="text-2xl">Name: {switchData.name}</h1>
            <p>Type: {switchData.type}</p>
            <p>Operating force: {switchData.operating_force}</p>
        </div>
    );
}
