import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      

      <main className="m-4 bg-white border-black border-4 rounded-2xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)] w-[1080px] h-[700px] p-0 flex justify-center items-center overflow-hidden relative">
        <div className="absolute inset-0">
          <Image
            src="/keyboards.jpg"
            alt="keyboards"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="backdrop-blur-[3px] backdrop-saturate-[200%]  bg-opacity-10border border-opacity-20 border-black border-4 absolute z-10 text-white p-4 rounded-2xl text-4xl transform transition duration-700 hover:scale-110 hover:text-yellow-500 cursor-pointer">
          <p>As simple as beautiful and useful</p>
        </div>

      </main>
    </div>
  );
}
