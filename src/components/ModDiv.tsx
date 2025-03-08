import Image from "next/image";
import Link from "next/link";

interface ModsDivProps {
    url: string;
    name: string;
    link: string;
}


const ModsDiv: React.FC<ModsDivProps> = ({ url, name, link }) => {
    return (
        <Link href={link}>
            <div className="w-[320px] h-[320px] bg-yellow-200 flex flex-col items-center
            justify-center border-black border-4 rounded-lg shadow-[5px_5px_0px_rgba(0,0,0,0.1)]
            hover:bg-yellow-300 transition duration-300 hover:cursor-pointer text-black">
                
                    <Image src={url} alt={name} width={200} height={200} />
                    <p className="text-center text-4xl">{name}</p>
                
            </div>
        </Link>
    );
};

export default ModsDiv;