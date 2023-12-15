import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Rent an awesome car in no time!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="relative"
        // className={inter.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
