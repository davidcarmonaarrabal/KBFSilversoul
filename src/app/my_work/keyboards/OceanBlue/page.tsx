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
                <h1 className="text-2xl xl:text-4xl">Ocean Blue Keyboard 65%</h1>
                <p className="text-left xl:text-2xl mt-6">Minimalist keyboard, perfect for your daily PC usage, coding and for make your Set-Up more aesthetic.
                </p>
                <p className="text-right xl:text-2xl mt-6">This keyboard uses a <Link href={'https://s.click.aliexpress.com/e/_opAGTzL'} className={`${classLink}`}>Ziyoulang K68</Link> as
                    a base, this base is <Link href={'/mods/Connections'} className={`${classLink}`} target="_blank">Hot-Swappable</Link>, this
                    means that I can easily change
                    the <Link href={'/mods/Types_Switches'} className={`${classLink}`}>switches</Link> whenever I want.
                </p>
                <p className="text-left xl:text-2xl mt-6">In this case, this Keyboard uses stock switches, specifically OUTEMU Red</p>
                <Switch switchId={9}></Switch>
                <p className="text-right xl:text-2xl mt-6">This keyboard is perfect for coding, 
                    instead of being a mechanical keyboard oriented to game, this has not RGB, and
                    you can experience some Ghosting if you use it to game, but it is perfect for you 
                    if code, it&apos;s compact, silent and very satisfactory to use.
                </p>
                <p className="text-left xl:text-2xl mt-6">Talking about <Link href={'/mods'} className={`${classLink}`}>mods</Link>;  
                    first of all, I&apos;ve isolated with some foam, made a Tape Mod and clipped the stabs after lubbing them. Also, lubbed all the 
                    switches and added some 3D printed parts to the bottom of the keyboard to make it more inclined.
                </p>
                <p className="text-right xl:text-2xl mt-6">What else do you need? This Keyboard is extremely cheap, perfect for carry on with your laptop, silent, comfy and very, very pretty.</p>
            </div>
        </div>
    );
}
