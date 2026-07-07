import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "@/providers/Web3Provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  metadataBase: new URL("https://medispheretoken.vercel.app"),  
  title: "MediSphere ($MEDISPHERE) | Decentralized Healthcare",
  description: "Global leading digital healthcare ecosystem, transforming how people access medical care through technology, compassion, and innovation.",
  keywords: ["Crypto", "Healthcare", "Web3", "Telemedicine", "Blockchain", "$MEDISPHERE", "Decentralized Health"],
  icons: {
    icon: "/MediSphere.png",
    apple: "/MediSphere.png",
  },
  openGraph: {
    title: "MediSphere ($MEDISPHERE)",
    description: "The Future of Decentralized Healthcare.",
    url: "https://medispheretoken.com",
    siteName: "MediSphere",
    images: [
      {
        url: "/MediSphere.png",
        width: 1200,
        height: 630,
        alt: "MediSphere Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MediSphere | $MEDISPHERE",
    description: "The Future of Decentralized Healthcare.",
    images: ["/MediSphere.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MediSphere",
    "url": "https://medispheretoken.com",
    "logo": "https://medispheretoken.com/MediSphere.png",
    "description": "Global leading digital healthcare ecosystem on the blockchain.",
    "sameAs": [
      "https://x.com/MediSpheretoken",
      "https://t.me/medispheretoken",
    ]
  };
  
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-emerald-500 selection:text-white">
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
