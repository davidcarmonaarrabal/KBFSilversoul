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
                <h1 className="text-2xl xl:text-4xl">Cyberpunk 2077 TKL</h1>
                <p className="text-left xl:text-2xl mt-6">Welcome to Night City, let&apos;s enjoy this Keyboard!
                </p>
                <p className="text-right xl:text-2xl mt-6">This keyboard uses a <Link href={'https://www.pccomponentes.com/newskill-serike-tkl-teclado-mecanico-gaming-full-rgb-switch-red?srsltid=AfmBOor50jQ-f80o_yZ8H_wlLYTZxf0936Ap_c0MrHK6WfDk3xrT41jf'} className={`${classLink}`}>Newskill Serike TKL</Link> as
                    a base, this base is not <Link href={'/mods/Connections'} className={`${classLink}`} target="_blank">Hot-Swappable</Link>, this
                    means that I have to weld all 
                    the <Link href={'/mods/Types_Switches'} className={`${classLink}`}>switches</Link>.
                </p>
                <p className="text-left xl:text-2xl mt-6">In this case, this Keyboard uses linear switches, specifically OUTEMU Peach V2</p>
                <Switch switchId={5}></Switch>
                <p className="text-right xl:text-2xl mt-6">This keyboard is perfect for gaming, 
                    being TKL and extremely Silent, you can have long sessions of gaming without issues.
                </p>
                <p className="text-left xl:text-2xl mt-6">Talking about <Link href={'/mods'} className={`${classLink}`}>mods</Link>;  
                    This Keyboard has a lot of mods done, starting with the switches changes, the brand new ones are manually lubed, I also did a foam and tape mod to this Keyboard and changed the Keycaps to a CyberPunk 2077 themed ones.
                </p>
                <p className="text-right xl:text-2xl mt-6">You can use it with USB.
                </p>
            </div>
        </div>
    );
}
