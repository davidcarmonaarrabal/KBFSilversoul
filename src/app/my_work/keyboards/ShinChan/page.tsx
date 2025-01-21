import Switch from "@/components/Switch";
import Image from "next/image";
import Link from "next/link";

const classLink = "text-blue-600 hover:cursor-pointer";

export default function Home() {
    return (
        <div className="flex flex-col m-4 bg-white border-black border-4 rounded-xl p-4
        shadow-[5px_5px_0px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center justify-center">
                <Image src={'/img/keyboards/ShinChan.jpg'} alt="Shin Chan Keyboard" width={600} height={400}
                    className="border-black border-4 rounded-lg"/>
            </div>
            <div className="pt-4 flex flex-col mb-4">
                <h1 className="text-2xl">Shin Chan Keyboard 65%</h1>
                <p className="text-left mt-4">This was my first custom keyboard, and the one I&apos;ve
                    used the most.
                </p>
                <p className="text-right">This keyboard uses a <Link href={'https://s.click.aliexpress.com/e/_opAGTzL'} className={`${classLink}`}>Ziyoulang K68</Link> as
                    a base, this base is <Link href={'/mods/Connections'} className={`${classLink}`}>Hot-Swappable</Link>, this
                    means that I can easily change
                    the <Link href={'/mods/Types_Switches'} className={`${classLink}`}>switches</Link> whenever I want.
                </p>
                <p className="text-left">In this case, this Keyboard uses tactile silent switches, specifically OUTEMU Silent Lemon V2</p>
                <Switch switchId={2}></Switch>
            </div>
        </div>
    );
}
