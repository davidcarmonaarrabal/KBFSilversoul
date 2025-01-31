import Switch from "@/components/Switch";
import Image from "next/image";
import Link from "next/link";

const classLink = "text-blue-600 hover:cursor-pointer hover:text-blue-800 transition duration-300";

export default function Home() {
    return (
        <div className="flex flex-col m-4 bg-white border-black border-4 rounded-xl p-4
        shadow-[5px_5px_0px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center justify-center">
                <Image src={'/img/keyboards/ShinChan.webp'} alt="Shin Chan Keyboard" width={600} height={400}
                    className="border-black border-4 rounded-lg xl:w-[800px] xl:h-[600px] "/>
            </div>
            <div className="pt-4 flex flex-col mb-4">
                <h1 className="text-2xl xl:text-4xl">EVA 01 Spanish Keyboard 96%</h1>
                <p className="text-left xl:text-2xl mt-6">The perfect keyboard for gaming, we all know gamers loves Evangelion.
                </p>
                <p className="text-right xl:text-2xl mt-6">This keyboard uses a <Link href={'https://amzn.to/4jSEuur'} className={`${classLink}`}>Glorious GMMK96</Link> as
                    a base, this base is <Link href={'/mods/Connections'} className={`${classLink}`} target="_blank">Hot-Swappable</Link>, this
                    means that I can easily change
                    the <Link href={'/mods/Types_Switches'} className={`${classLink}`}>switches</Link> whenever I want.
                </p>
                <p className="text-left xl:text-2xl mt-6">In this case, this Keyboard uses tactile switches, specifically OUTEMU Silent Lemon V2</p>
                <Switch switchId={2}></Switch>
                <p className="text-right xl:text-2xl mt-6">This keyboard is perfect for gaming, 
                    with almost a full-size, you can have long sessions of gaming without issues.
                    It comes with isolation done and tape-modded.
                </p>
                <p className="text-left xl:text-2xl mt-6">Talking about <Link href={'/mods'} className={`${classLink}`}>mods</Link>;  
                    this one has no mods done.
                </p>
                <p className="text-right xl:text-2xl mt-6">This keyboard is very premium, the Glorius base feels very heavy and premium, the stabs are very good and the sensations are 
                    amazing. You can use it with USB.
                </p>
            </div>
        </div>
    );
}
