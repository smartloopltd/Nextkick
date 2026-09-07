import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "NextKick | Discovering Africa's Next Football Stars",
    template: "%s | NextKick",
  },
  description: "NextKick helps young football talent across Nigeria and Africa build profiles, develop their game, compete in tournaments, and get discovered by scouts.",
  applicationName: "NextKick",
  authors: [{ name: "NextKick" }],
  creator: "NextKick",
  keywords: [
    "NextKick",
    "football talent Nigeria",
    "African football scouts",
    "youth football development",
    "football player profiles",
    "football tournaments Nigeria",
    "Binal Sports",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "NextKick",
    title: "NextKick | Discovering Africa's Next Football Stars",
    description: "Build your football profile, develop your game, compete, and get discovered with NextKick.",
    url: "/",
    images: [{ url: "/img/photo03.jpg", width: 1200, height: 630, alt: "NextKick football talent development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextKick | Discovering Africa's Next Football Stars",
    description: "Build your football profile, develop your game, compete, and get discovered with NextKick.",
    images: ["/img/photo03.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
