import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
    return (
        <div className="flex flex-col justify-center">
            <Link href="/" className="flex flex-row justify-center">
                <Image src="/img/logo1.png" alt="logo" width={120} height={60}
                    className='max-w-full h-auto' />
                <p className="text-4xl pl-3 justify-center text-black flex flex-col lg:items-center">
                    Mechanical Keyboards Fun{" "}
                    <span className="text-2xl">by Silversoul07</span>
                </p>
            </Link>
        </div>
    );
};

export default Logo;