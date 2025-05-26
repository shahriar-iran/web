import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./providers";
import { YekanBakh } from "@/lib/font";
import { rootConfig } from "@/config/root";




export const metadata: Metadata = {
  title: {
    default: rootConfig.name,
    template: `${rootConfig.name} | %s`,
  },
  description: rootConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: rootConfig.name,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: rootConfig.name,
    title: {
      default: rootConfig.name,
      template: `${rootConfig.name} | %s`,
    },
    description: rootConfig.description,
  },
  twitter: {
    card: "summary",
    title: {
      default: rootConfig.name,
      template: `${rootConfig.name} | %s`,
    },
    description: rootConfig.description,
  },
  other: {
    // enamad: "47208465"
  },
};

export const viewport: Viewport = {
  themeColor: [
      {media: "(prefers-color-scheme: light)", color: "#2969FF"},
      {media: "(prefers-color-scheme: dark)", color: "#2969FF"},
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html 
      lang="fa-IR"
      className="selection:bg-primary/25 selection:text-primary"
     >
      <body
        className={`${YekanBakh.className} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
