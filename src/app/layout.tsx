import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
import { Provider } from "@/lib/Provider";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fuzail",
  description: "A Portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${nunito.variable} antialiased`}>
        <Provider>
          <Navbar />
          {children}
          <Toaster position="top-center" theme="system" />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
