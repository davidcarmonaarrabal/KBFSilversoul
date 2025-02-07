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
                <h1 className="text-2xl xl:text-4xl">Alice Keyboard</h1>
                <p className="text-left xl:text-2xl mt-6">More ergonomic Keyboard, perfect for long sessions usage.</p>
                <p className="text-right xl:text-2xl mt-6">This keyboard uses a <Link href={'https://s.click.aliexpress.com/e/_omnA67t'} className={`${classLink}`}>AJAZZ Alice</Link> as
                    a base, this base is <Link href={'/mods/Connections'} className={`${classLink}`} target="_blank">Hot-Swappable</Link>, this
                    means that I can easily change
                    the <Link href={'/mods/Types_Switches'} className={`${classLink}`}>switches</Link> whenever I want.
                </p>
                <p className="text-left xl:text-2xl mt-6">In this case, this Keyboard uses tactile silent switches, specifically AKKO Pengiun Silent</p>
                <Switch switchId={8}></Switch>
                <p className="text-right xl:text-2xl mt-6">This keyboard is perfect for coding, 
                    instead of being a mechanical keyboard oriented to game, this has an ergonomic design and a compact size.
                </p>
                <p className="text-left xl:text-2xl mt-6">Talking about <Link href={'/mods'} className={`${classLink}`}>mods</Link>, this keyboard only has the switches changed and lubed.
                </p>
                <p className="text-right xl:text-2xl mt-6">Cheap, perfect for carry on with your laptop, silent, comfy and ergonomic. You can use it with Bluetooth or with it&apos;s 2.4GHz dongle</p>
            </div>
        </div>
    );
}
