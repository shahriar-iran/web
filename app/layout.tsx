import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./providers";
import { YekanBakh } from "@/lib/font";
import { rootConfig } from "@/config/root";
import { Layout } from "@/components/Layout/Layout";
import { headers } from "next/headers";




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

export default async function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html
      lang="fa-IR"
      dir="rtl"
      className="selection:bg-primary selection:text-primary-100"
     >
      <body
        className={`${YekanBakh.className} antialiased`}
      >
        <Providers>
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
