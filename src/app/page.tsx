import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/logo.png" alt="logo" width={500} height={300}></Image>
      <h1 className="text-4xl">Mechanical Keyboards Fun <span className="text-2xl">by Silversoul07</span></h1>
    </div>
  );
} 
