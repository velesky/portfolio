import type { Metadata } from "next";
import { Bebas_Neue, DM_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/Providers";
import { Navigation } from "@/components/layout/Navigation";
import { PiedDePage } from "@/components/layout/PiedDePage";
import { CurseurPersonnalise } from "@/components/ui/CurseurPersonnalise";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Velesky | Yao Dapré Georges Emmanuel | Creative Developer & Vibe Coder",
  description:
    "Portfolio de Yao Dapré Georges Emmanuel (Velesky). Développeur Junior spécialisé Backend & Vibe Coder basé à Abidjan. Je construis des expériences numériques modulaires, immersives et performantes.",
  keywords: [
    "Velesky",
    "Yao Dapré Georges Emmanuel",
    "Creative Developer",
    "Développeur Côte d'Ivoire",
    "Abidjan Tech",
    "Next.js 15",
    "Flutter Developer",
    "Vibe Coder",
    "Web Design Immersif",
  ],
  authors: [{ name: "Velesky" }],
  creator: "Velesky",
  publisher: "Velesky",
  metadataBase: new URL("https://portfolio-velesky.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velesky | Yao Dapré Georges Emmanuel | Creative Developer & Vibe Coder",
    description:
      "Développeur Junior basé à Abidjan. Je fusionne ingénierie et esthétique pour créer des solutions numériques d'exception.",
    creator: "@velesky",
    images: ["/og-image.jpg"],
  },
  openGraph: {
    title: "Velesky | Yao Dapré Georges Emmanuel | Portfolio",
    description:
      "Explorez l'univers de Velesky : développement backend, expertise mobile et UI immersive.",
    url: "https://portfolio-velesky.vercel.app",
    siteName: "Portfolio Velesky",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Velesky Portfolio Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${bebasNeue.variable} ${dmMono.variable} ${playfairDisplay.variable} font-dm-mono antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CurseurPersonnalise />
          <Navigation />
          <main className="min-h-screen selection:bg-accent selection:text-background">
            {children}
          </main>
          <PiedDePage />
        </ThemeProvider>
      </body>
    </html>
  );
}
