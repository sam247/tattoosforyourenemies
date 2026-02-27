import type { Metadata } from "next";
import { IntroScreen } from "@/components/IntroScreen";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tattoos For Your Enemies",
  description: "Tattoos, flash, illustrations and more from Jack Watts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black antialiased">
        <IntroScreen>
          <Header />
          <main>{children}</main>
          <Footer />
        </IntroScreen>
      </body>
    </html>
  );
}
