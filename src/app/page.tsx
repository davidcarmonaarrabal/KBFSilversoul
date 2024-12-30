import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify-sans",
});

export default function Home() {
  return (
    <div className={`${pixelifySans.className}`}>
      <header className="pt-10 flex flex-row justify-center">
        <Image src="/logo.png" alt="logo" width={200} height={60}/>
        <h1 className="text-4xl pt-6">
          Mechanical Keyboards Fun{" "}
          <span className="text-2xl">by Silversoul07</span>
        </h1>
      </header>
    </div>
  );
}
