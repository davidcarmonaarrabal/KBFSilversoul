"use client";

import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import { metadata } from "./metadata";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

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
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description ?? ''} />
        <title>{String(metadata.title ?? 'Default title')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} antialiased bg-orange-50 ${pixelifySans.className} bg-[url('/img/Keycap.png')] bg-repeat bg-[300px_300px] animate-moveBackground flex flex-col min-h-screen`}>
        <script type="module" defer src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/quantum.js"></script>
        <Header></Header>
        <div className="flex flex-col items-center justify-center flex-grow">
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
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}

