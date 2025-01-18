import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://wassimbenamor.com";
const title = "Wassim Ben Amor - Senior Software Engineer";
const description =
  "Experienced Senior Software Engineer passionate about the JavaScript ecosystem. Proficient in React, Next.js, Angular, and Node.js frameworks like NestJS. I build scalable, efficient, and maintainable web applications.";
const imageUrl = "/portfolio-project.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@wassim_benamor",
    creator: "@wassim_benamor",
    images: imageUrl,
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    title,
    description,
    siteName: "Wassim Ben Amor",
    images: [{ url: imageUrl, secureUrl: imageUrl, alt: title, type: "image/jpeg", width: 540, height: 282 }],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`antialiased ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-zinc-50 dark:bg-black overflow-y-scroll">
        <div className="min-h-screen flex flex-col items-center sm:px-8">
          <div className="px-4 sm:px-8 lg:px-20 pb-8 w-full max-w-[90rem] bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
