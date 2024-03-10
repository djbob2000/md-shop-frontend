import { Inter } from "next/font/google";
import { Header } from "@/components/header/header";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";
import ProviderWrapper from "@/components/ProviderWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderWrapper>
          <Header />
          <Separator />
          <main className="container  px-8">{children}</main>
        </ProviderWrapper>
        <Toaster />
      </body>
    </html>
  );
}
