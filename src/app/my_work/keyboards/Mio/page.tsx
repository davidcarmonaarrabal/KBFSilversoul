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
                <h1 className="text-2xl xl:text-4xl">Screen Keyboard TKL</h1>
                <p className="text-left xl:text-2xl mt-6">This is my main keyboard, not fully modded, but for me, the best option for a low budget.
                </p>
                <p className="text-right xl:text-2xl mt-6">This keyboard is an <Link href={'https://s.click.aliexpress.com/e/_oCD9rVx'} className={`${classLink}`}>Attack Shark K86</Link>, 
                is <Link href={'/mods/Connections'} className={`${classLink}`} target="_blank">Hot-Swappable</Link>, this
                    means that I can easily change
                    the <Link href={'/mods/Types_Switches'} className={`${classLink}`}>switches</Link> whenever I want.
                </p>
                <p className="text-left xl:text-2xl mt-6">In this case, this Keyboard uses tactile switches, specifically AKKO Cream Blue Pro V3</p>
                <Switch switchId={6}></Switch>
                <p className="text-right xl:text-2xl mt-6">This keyboard is perfect for gaming, also an excellent option to code, 
                    with an discrete but beautiful RGB, a very simple software and no-ghosting design, this is for me the best cheap keyboard, 
                    it comes with isolation, tapemod, and a gasket mounting, which reduces vibration transmissions. Also, this keyboard has a knob to control
                    volume or any function you programe on it, and a mini LCD screen to insert any GIF o see the battery, time, etc.
                </p>
                <p className="text-left xl:text-2xl mt-6">Talking about <Link href={'/mods'} className={`${classLink}`}>mods</Link>, this keyboard has new switches (the stock ones are Linear) 
                more oriented to coding, but lubed, and a new set of keycaps.
                </p>
                <p className="text-right xl:text-2xl mt-6">This keyboard has 3 types of connection, USB-C, 2.4 GHz Dongle and Bluetooth.</p>
                <p className="text-left xl:text-2xl mt-6">I highly recommend this keyboard, it has a lot of stock modifications done, it&apos;s cheap and well built, 
                    and easy to custom. 
                </p>
            </div>
        </div>
    );
}
