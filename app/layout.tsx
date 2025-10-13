import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./providers";
import { YekanBakh } from "@/lib/font";
import { rootConfig } from "@/config/root";
import { Layout } from "@/components/Layout/Layout";




export const metadata: Metadata = {
  title: {
    default: rootConfig.name,
    template: `${rootConfig.name} | %s`,
  },
  description: rootConfig.description,
  applicationName: rootConfig.name,
  
  // PWA Icons
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/icons/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/icon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/icons/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-384x384.png", sizes: "384x384", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/icons/apple-touch-icon-57x57.png", sizes: "57x57" },
      { url: "/icons/apple-touch-icon-60x60.png", sizes: "60x60" },
      { url: "/icons/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/icons/apple-touch-icon-76x76.png", sizes: "76x76" },
      { url: "/icons/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/icons/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/icons/apple-touch-icon-144x144.png", sizes: "144x144" },
      { url: "/icons/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/icons/apple-touch-icon-180x180.png", sizes: "180x180" },
    ],
  },
  
  // PWA Manifest
  manifest: "/manifest.json",
  
  // Apple Web App Configuration
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: rootConfig.name,
  },
  
  formatDetection: {
    telephone: false,
  },
  
  // Open Graph for social sharing
  openGraph: {
    type: "website",
    siteName: rootConfig.name,
    title: {
      default: rootConfig.name,
      template: `${rootConfig.name} | %s`,
    },
    description: rootConfig.description,
    url: rootConfig.baseUrl,
    images: [
      {
        url: "/icons/og-image.png",
        width: 1200,
        height: 630,
        alt: rootConfig.name,
      }
    ],
    locale: "fa_IR",
  },
  
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: {
      default: rootConfig.name,
      template: `${rootConfig.name} | %s`,
    },
    description: rootConfig.description,
    images: ["/icons/twitter-image.png"],
  },
  
  // Prevent indexing for private panel
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  other: {
    // Mobile optimization
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "msapplication-TileColor": "#2969FF",
    "msapplication-TileImage": "/icons/mstile-144x144.png",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2969FF" },
    { media: "(prefers-color-scheme: dark)", color: "#2969FF" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  colorScheme: "light dark",
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
