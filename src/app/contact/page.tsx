import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Link href={'/'} className="flex flex-col justify-center items-center cursor-pointer">
                <Image src="/img/maintenance.png" alt="maintenance" 
                width={200} height={200} className="sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]"></Image>
                <p className="lg:text-2xl">Ups... seems like this website isn&apos;t ready yet...</p>
            </Link>
        </div>
    );
}