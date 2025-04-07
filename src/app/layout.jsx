import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Red Circle Agency",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/circle-button.png" sizes="any" />
        <Script src="/scripts/cursor.js" strategy="lazyOnload" type="module" />
        {/* <script type="text/javascript" src="/scripts/cursor.js"></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <div className="cursor-dot" data-cursor-dot></div>
        <div className="cursor-outline" data-cursor-outline></div>
        {children}

        <Footer />
      </body>
    </html>
  );
}
