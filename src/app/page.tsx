import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify-sans",
});

export default function Home() {
  return (
    <div className={`${pixelifySans.className} flex flex-col items-center`}>
      <header className="m-4 mt-10 pl-10 pr-10 flex flex-row justify-center space-x-96 bg-white border-black border-4 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)]">
        <div className="flex flex-row justify-center">
          <Image src="/logo1.png" alt="logo" width={100} height={60} />
          <h1 className="text-4xl pt-6 pl-3">
            Mechanical Keyboards Fun{" "}
            <span className="text-2xl">by Silversoul07</span>
          </h1>
        </div>
        <div className="space-x-3 pt-10">
          <button className="hover:text-blue-900 hover:border-b-2 hover:border-black transition duration-300">Mi trabajo</button>
          <button className="hover:text-blue-900 hover:border-b-2 hover:border-black transition duration-300">Recomendaciones</button>
          <button className="hover:text-blue-900 hover:border-b-2 hover:border-black transition duration-300">Sobre mí</button>
          <button className="hover:text-blue-900 hover:border-b-2 hover:border-black transition duration-300">Mods</button>
        </div>
      </header>

      <main className="m-4 bg-white border-black border-4 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)] w-[1080px] h-[700px] p-0 flex justify-center items-center overflow-hidden relative">
        <div className="absolute inset-0">
          <Image
            src="/keyboards.jpg"
            alt="keyboards"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="absolute z-10 text-white bg-black bg-opacity-70 p-4 rounded">
          <h1>As simple as beautiful and useful</h1>
        </div>
      </main>
    </div>
  );
}
