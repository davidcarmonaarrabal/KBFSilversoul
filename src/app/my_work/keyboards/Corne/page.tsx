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
                <h1 className="text-2xl xl:text-4xl">White Corne Keyboard</h1>
                <p className="text-left xl:text-2xl mt-6">An advanced Keyboard for advanced users, do you accept the challenge?
                </p>
                <p className="text-right xl:text-2xl mt-6">This keyboard uses a <Link href={'https://s.click.aliexpress.com/e/_EzhLRWU'} className={`${classLink}`}>Corne Splitted Keyboard</Link> as
                    a base, this base is <Link href={'/mods/Connections'} className={`${classLink}`} target="_blank">Hot-Swappable</Link>, this
                    means that I can easily change
                    the <Link href={'/mods/Types_Switches'} className={`${classLink}`}>switches</Link> whenever I want.
                </p>
                <p className="text-left xl:text-2xl mt-6">In this case, this Keyboard uses tactile silent switches, specifically OUTEMU Silent Cream Yellow</p>
                <Switch switchId={12}></Switch>
                <p className="text-right xl:text-2xl mt-6">This keyboard is perfect for coding, but not for everyone, this one requires a time to learn to use it properly, this one is for pro users.
                </p>
                <p className="text-left xl:text-2xl mt-6">Talking about <Link href={'/mods'} className={`${classLink}`}>mods</Link>, this one only has the switches changed.
                </p>
                <p className="text-right xl:text-2xl mt-6">A cheap option por a corne splitted, an ergonomic Keyboard, silent, comfy and cute. You can use it with USB-C</p>
            </div>
        </div>
    );
}
