import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ryan Zerka | ISSA Certified Personal Trainer | RZ Performance",
  description:
    "ISSA-certified personal trainer specializing in functional fitness, strength training, and athletic performance. Spartan Race and HYROX competitor. Online and in-person coaching available.",
  keywords: [
    "personal trainer",
    "ISSA certified",
    "functional fitness",
    "strength training",
    "Spartan Race",
    "HYROX",
    "online coaching",
    "Ryan Zerka",
    "RZ Performance",
  ],
  verification: {
    google: "RkzVHQdLEni5Ubz4uo1tN3y10y7FiKO48IiN7cmWRbs",
  },
  openGraph: {
    title: "Ryan Zerka | ISSA Certified Personal Trainer",
    description:
      "Science-backed training programs designed to build strength, burn fat, and create habits that last a lifetime.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} scroll-smooth`}>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
