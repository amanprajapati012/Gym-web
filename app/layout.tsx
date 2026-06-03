import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ToastProvider from "@/components/ui/toast";
import ThemeProvider from "@/components/providers/ThemeProvider"; // 👈 new
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SERVER SIDE METADATA (allowed)
export const metadata: Metadata = {
  title: "Gym AI App",
  description: "AI-powered gym management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-screen flex flex-col">

        {/* ✅ CLIENT LOGIC HERE */}
        <ThemeProvider>
          <ToastProvider />

          <main className="flex-grow">
            {children}
          </main>
        </ThemeProvider>

      </body>
    </html>
  );
}