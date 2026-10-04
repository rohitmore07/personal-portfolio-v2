import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import CoffeeCursor from "./utils/CoffeeCursor";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CREATRO",
  description:
    "Frontend Developer and Web Designer, currently at India. Focused on interfaces and experiences, working remotely from Pune, Maharashtra.",
  generator: "Next.js",
  applicationName: "Rohit More",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "india",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
    "creatro",
    "github",
    "front-end",
    "nextjs portfolio",
    "frontend developer portfolio"
  ],
  colorScheme: "dark",
  openGraph: {
    title: "CREATRO",
    description:
      "Frontend Engineer and UI/UX Designer. Focused on interfaces and experiences, working remotely from India.",
    url: "https://creatro.vercel.app/",
    siteName: "https://creatro.vercel.app/",
    images: [
      {
        url: "https://github.com/rohitmore07/personal-portfolio-v2/blob/bfed58f1f87a9b74bbb80a8b15ed0eff3f88c53c/public/preview.png",
        width: 1200,
        height: 630,
        alt: "Rohit More — Frontend Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit More — Frontend Engineer",
    description:
      "Frontend Developer and UI/UX Designer. Focused on interfaces and experiences, working remotely from India",
    creator: "rohittmore",
    creatorId: "777",
    images: [
      "https://github.com/rohitmore07/personal-portfolio-v2/blob/bfed58f1f87a9b74bbb80a8b15ed0eff3f88c53c/public/preview.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <CoffeeCursor />
        <Analytics />
      </body>
    </html>
  );
}
