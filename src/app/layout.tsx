import type { Metadata } from "next";
import { Toaster as SonnerToaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tattoos For Your Enemies",
  description: "Tattoos for Your Enemies - custom tattoos and illustrations",
  openGraph: {
    title: "Tattoos For Your Enemies",
    description: "Tattoos for Your Enemies - custom tattoos and illustrations",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <Toaster />
          <SonnerToaster theme="light" />
          <CookieBanner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
