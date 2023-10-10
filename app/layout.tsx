import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AppProvider } from "../context";

let title = "Dream Room Generator";
let description = "Generate your dream room in seconds.";
let ogimage = "https://roomgpt-demo.vercel.app/og-image.png";
let sitename = "roomGPT.io";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://roomgpt-demo.vercel.app",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#17181C] text-white flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
        <AppProvider>
          <Header />
          {children}
          <Footer />

          <Analytics />
        </AppProvider>
      </body>
    </html>
  );
}
