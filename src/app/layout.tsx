"use client";

import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import { metadata } from "./metadata";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
});

// Hook para obtener el tamaño de la ventana
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Llamamos una vez al inicio para obtener el tamaño inicial

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const { width } = useWindowSize();

  const isMobile = width && width < 768;

  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description ?? ""} />
        <title>{String(metadata.title ?? "Default title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} antialiased ${pixelifySans.className} 
        ${isMobile ? "bg-white" : "bg-orange-50 bg-[url('/img/Keycap.png')] bg-repeat bg-[300px_300px]"} 
        animate-moveBackground flex flex-col min-h-screen`}
      >
        {isMobile ? (
          <div className="flex flex-col items-center justify-center flex-grow bg-white">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center flex-grow">
            <Header />
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
