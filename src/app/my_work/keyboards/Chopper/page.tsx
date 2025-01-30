import Switch from "@/components/Switch";
import Image from "next/image";
import Link from "next/link";

const classLink = "text-blue-600 hover:cursor-pointer hover:text-blue-800 transition duration-300";

export default function Home() {
    return (
        <div className="flex flex-col m-4 bg-white border-black border-4 rounded-xl p-4
        shadow-[5px_5px_0px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center justify-center">
                <Image src={'/img/keyboards/Mio.webp'} alt="My Keyboard" width={600} height={400}
                    className="border-black border-4 rounded-lg xl:w-[800px] xl:h-[600px] "/>
            </div>
            <div className="pt-4 flex flex-col mb-4">
                <h1 className="text-2xl xl:text-4xl">Chopper Keyboard 75%</h1>
                <p className="text-left xl:text-2xl mt-6">Enjoy One Piece also when you are gaming with this keyboard! Mugiwaras, this is for you!
                </p>
                <p className="text-right xl:text-2xl mt-6">This keyboard is an <Link href={'https://s.click.aliexpress.com/e/_oCD9rVx'} className={`${classLink}`}>ZOUYA Tester84</Link>, 
                is <Link href={'/mods/Connections'} className={`${classLink}`} target="_blank">Hot-Swappable</Link>, this
                    means that I can easily change
                    the <Link href={'/mods/Types_Switches'} className={`${classLink}`}>switches</Link> whenever I want.
                </p>
                <p className="text-left xl:text-2xl mt-6">In this case, this Keyboard uses tactile switches, specifically AKKO Lavender Purple Pro</p>
                <Switch switchId={1}></Switch>
                <p className="text-right xl:text-2xl mt-6">This keyboard is perfect for gaming, also an excellent option to code, 
                    with an discrete but beautiful RGB, a very simple software and no-ghosting design, 
                    it comes with isolation and tapemod.
                </p>
                <p className="text-left xl:text-2xl mt-6">Talking about <Link href={'/mods'} className={`${classLink}`}>mods</Link>, this keyboard has no mods done. 
                </p>
                <p className="text-right xl:text-2xl mt-6">You can use this Keyboard with USB.</p>
                <p className="text-left xl:text-2xl mt-6">I highly recommend this keyboard, it has a lot of stock modifications done, it&apos;s cheap and well built, 
                    and easy to custom.
                </p>
            </div>
        </div>
    );
}
