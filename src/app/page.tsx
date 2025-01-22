import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      

      <main className="m-4 bg-white border-black border-4 rounded-2xl
      shadow-[5px_5px_0px_rgba(0,0,0,0.1)] w-[355px] h-[300px] p-0 flex justify-center 
      items-center overflow-hidden relative flex-grow sm:w-[620px] md:w-[750px] md:h-[500px] lg:w-[1000px] lg:h-[600px] 
      xl:w-[1260px] 2xl:w-[1500px]">
        <div className="absolute inset-0">
          <Image
            src="/img/keyboards.webp"
            alt="keyboards"
            fill
            className="object-cover rounded-xl max-w-full h-auto"
          />
        </div>

        <Link href={'/my_work'} className="flex flex-col items-center justify-center">
          <div className="backdrop-blur-[20px] backdrop-saturate-[200%]  bg-opacity-10border border-opacity-20
          border-black border-4 absolute z-10 text-white p-4 rounded-2xl text-1xl transform transition 
          duration-700 hover:scale-110 hover:text-yellow-500 cursor-pointer 
          md:text-4xl">
            <p>As simple as beautiful and useful</p>
          </div>
        </Link>  

      </main>
    </div>
  );
}
