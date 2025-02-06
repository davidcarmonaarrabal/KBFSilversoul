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
                <h1 className="text-2xl xl:text-4xl">K95 Platinum Keycaps Changed</h1>
                <p className="text-left xl:text-2xl mt-6">The perfect keyboard for gaming and streaming.
                </p>
                <p className="text-right xl:text-2xl mt-6">This keyboard uses a <Link href={'https://www.corsair.com/es/es/p/keyboards/ch-9127014-es/k95-rgb-platinum-mechanical-gaming-keyboard-a-cherrya-mx-speed-a-black-es-ch-9127014-es?srsltid=AfmBOopbpvCKd6Ehq0AR078us2BHC2gAR4_GGGE2sTqZtkR4XvxaFcv7'} className={`${classLink}`}>Corsair K95 RGB Platinum</Link> as
                    a base, this base is not <Link href={'/mods/Connections'} className={`${classLink}`} target="_blank">Hot-Swappable</Link>, this
                    means that I have to weld all 
                    the <Link href={'/mods/Types_Switches'} className={`${classLink}`}>switches</Link> whenever I want.
                </p>
                <p className="text-left xl:text-2xl mt-6">In this case, this Keyboard uses stock switches, specifically CHERRY MX Speed</p>
                <Switch switchId={2}></Switch>
                <p className="text-right xl:text-2xl mt-6">This keyboard is perfect for gaming, 
                    with a full-size, you can have long sessions of gaming without issues.
                    Also, with the Macro Keys, you can use ElGato Streamdeck functionalities.
                    We also know the major problem of Corsair Keyboards are the keycaps, I solved it using some 
                    external white keycaps that creates a nice contrast and style.
                </p>
                <p className="text-left xl:text-2xl mt-6">Talking about <Link href={'/mods'} className={`${classLink}`}>mods</Link>;  
                    this one has no mods done.
                </p>
                <p className="text-right xl:text-2xl mt-6">You can use it with USB.
                </p>
            </div>
        </div>
    );
}
