import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PPLG CLASS",
  description: "PPLG adalah salah satu jurusan di SMK Negeri 21 Jakarta.",
  authors: [{name: "bolehngopi"}, {name: "rezezi"}],
};

const poppins = Poppins({
  weight: "400",
  subsets: ['latin'],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
