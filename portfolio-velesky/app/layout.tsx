import type { Metadata } from "next";
import { Bebas_Neue, DM_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/Providers";

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
  title: "Velesky | Yao Dapré Georges Emmanuel",
  description: "Portfolio de Yao Dapré Georges Emmanuel (Velesky), Développeur Junior spécialisé Backend & Vibe Coder basé à Abidjan.",
  openGraph: {
    title: "Velesky | Portfolio",
    description: "Développeur Junior spécialisé Backend & Vibe Coder.",
    url: "https://portfolio-velesky.vercel.app",
    siteName: "Portfolio Velesky",
    locale: "fr_FR",
    type: "website",
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
          <main className="min-h-screen selection:bg-accent selection:text-background">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
