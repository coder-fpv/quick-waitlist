import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "coderfpv waitlist";
const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  "coderfpv waitlist";

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-[#fff6df]  to-[#FEFBF0]`}>
        <main className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0f0f1f] via-[#1a1a2e] to-[#252540]">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#ff00ff33_25%,transparent_25%,transparent_75%,#00ffff33_75%,#00ffff33_100%)] bg-[length:60px_60px] opacity-10 pointer-events-none"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] animate-pulse"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ff00ff] via-[#00ffff] to-[#ff00ff] animate-pulse"></div>
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#ff00ff] via-[#00ffff] to-[#ff00ff] animate-pulse"></div>
          </div>
          <div className="relative z-10">{children}</div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
