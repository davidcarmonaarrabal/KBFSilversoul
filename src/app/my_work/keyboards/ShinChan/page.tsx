import Image from "next/image";
import Link from "next/link";

const classLink = "text-blue-600 hover:cursor-pointer";

export default function Home() {
    return (
        <div className="flex flex-col m-4">
            <div>
                <Image src={'/img/keyboards/ShinChan.jpg'} alt="Shin Chan Keyboard" width={600} height={400}
                className="border-black border-4 rounded-lg"></Image>
            </div>
            <div className="pt-4 flex flex-col">
                <h1 className="text-2xl">Shin Chan Keyboard 65%</h1>
                <p className="justify-start">This was my first custom keyboard, and the one I&apos;ve
                    used the most.
                </p>
                <p className="justify-end">This keyboard uses a <Link href={'https://s.click.aliexpress.com/e/_opAGTzL'} className={`${classLink}`}>Ziyoulang K68</Link> as 
                a base, this base is <Link href={'/mods/Connections'} className={`${classLink}`}>Hot-Swappable</Link>, this 
                means that I can easily change 
                the <Link href={'/mods/Types_Switches'} className={`${classLink}`}>switches</Link> whenever I want.
                </p>
                <p>In this case, this Keyboard uses tactile silent switches, specifically 
                    the <Link href={`/switchDetails/${encodeURIComponent("OUTEMU Silent Lemon V2")}`} className={`${classLink}`}>OUTEMU Silent Lemon V2</Link>
                </p>
            </div>
        </div>
    );
}