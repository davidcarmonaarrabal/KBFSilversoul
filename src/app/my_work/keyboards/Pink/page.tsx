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
                <h1 className="text-2xl xl:text-4xl">Pink Keyboard TKL</h1>
                <p className="text-left xl:text-2xl mt-6">The perfect restauration for a keyboard that was about being trashed and my first ISO Spanish Keyboard.
                </p>
                <p className="text-right xl:text-2xl mt-6">This keyboard uses a <Link href={'https://amzn.to/4aG415v'} className={`${classLink}`}>Mars Gaming MKXTKL</Link> as
                    a base, this base is not <Link href={'/mods/Connections'} className={`${classLink}`} target="_blank">Hot-Swappable</Link>, this
                    means that I have to weld every switch manually.
                </p>
                <p className="text-left xl:text-2xl mt-6">In this case, this Keyboard uses linear switches, specifically AJAZZ Sea Salt</p>
                <Switch switchId={4}></Switch>
                <p className="text-right xl:text-2xl mt-6">This keyboard is perfect for everyone who does not wants to learn an ANSI distribution, also, with everything modded, 
                    this one is perfect for extremely comfy gaming sessions, writing or coding, with RGB and no ghosting, it&apos;s an amazing upgrade considering where it comes from.
                </p>
                <p className="text-left xl:text-2xl mt-6">Talking about <Link href={'/mods'} className={`${classLink}`}>mods</Link>;  
                    first of all, I&apos;ve isolated with some foam, made a Tape Mod and clipped the stabs after lubbing them. Also, lubbed all the 
                    switches and added some 3D printed parts to the bottom of the keyboard to make it more inclined.
                </p>
                <p className="text-right xl:text-2xl mt-6">This Keyboard is extremely cheap, Spanish, and comfy. You can use it with USB connection.</p>
            </div>
        </div>
    );
}
