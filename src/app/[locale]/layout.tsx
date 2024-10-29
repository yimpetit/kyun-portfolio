import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import dayjs from "dayjs";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kyun-official.com"),
  title: "kyun. - portfolio",
  description: "kyun.'s portfolio page",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [
      {
        url: "/og_img.png",
      },
    ],
    description: "kyun.'s portfolio site",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="w-full max-w-[600px] my-0 mx-auto">
            <Header locale={locale} />
            <main className="px-4">{children}</main>
            <p className="py-6 text-center text-sm text-slate-400">
              © {dayjs().year()} kyun. All Rights Reserved.
            </p>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
