import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kyun. portfolio",
  description: "kyun.'s portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full max-w-[600px] my-0 mx-auto">
          <Header />
          <main>{children}</main>
          <p className="py-6 text-center text-sm text-slate-400">
            © {dayjs().year()} kyun. All Rights Reserved.
          </p>
        </div>
      </body>
    </html>
  );
}
