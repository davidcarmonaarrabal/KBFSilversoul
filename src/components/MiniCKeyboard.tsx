import { MousePointerClick } from "lucide-react";
import Image from "next/image";

const MiniCKeyboard: React.FC = () => {
    return (
        <div className='bg-white border-black border-4 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)] w-[345px] sm:w-[615px] 
        md:w-[740px] lg:w-[1000px] xl:w-[1240px] 2xl:w-[1500px] flex flex-col m-6 lg:flex-row text-black'>
            <div className="m-2 flex flex-col items-center justify-center">
                <Image src={'/img/maintenance.png'} alt="Placeholder" width={300} 
                height={300} className="border-black border-2 rounded-md sm:w-[500px] sm:h-[500px]
                md:w-[600px] md:h-[600px] lg:w-[500px] lg:h-[500px] 2xl:w-[650px]
                2xl:h-[650px]"></Image>
            </div>
            <div className="m-2 items-center justify-center flex flex-col 2xl:ml-5 text-black">
                <ul className="flex flex-col justify-center items-center lg:items-start lg:mt-8
                xl:mt-10">
                    <li className="text-2xl xl:text-4xl">Name: Placeholder</li>
                    <li className="xl:text-2xl">Switches: Red</li>
                    <li className="xl:text-2xl">Base: GMK Something</li>
                    <li className="xl:text-2xl">Keycaps: Some</li>
                    <li className="mt-3 xl:text-2xl">A nice placeholder to test out the new feature of the 
                    website.</li>
                </ul>
                <div className="lg:mt-auto flex justify-center items-center text-black">
                    <button className="bg-yellow-200 p-2 rounded-lg border-black
                    border-2 flex flex-col items-center justify-center mt-4
                    hover:bg-yellow-300 transition duration-300">
                        <MousePointerClick/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MiniCKeyboard;