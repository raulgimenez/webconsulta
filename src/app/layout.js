import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reme Rubio",
  description: "Psicologia per tot el cicle vital des de la mirada sistèmica i psicoanalítica",
  alternates: {
    canonical: 'https://www.remerubio.com/',
  },
  keywords: ["psicologia", "psicoterapia", "Reme Rubio", "consulta online", "consulta presencial", "Granollers", "Barcelona", "Valles oriental", "Valles Occidental", "psicologia online", "psicologia presencial"],
  openGraph: {
    title: "Reme Rubio",
    description: "Psicologia per tot el cicle vital des de la mirada sistèmica i psicoanalítica",
    url: 'https://www.remerubio.com/',
    siteName: 'Reme Rubio',
    images: [
      {
        url: 'https://www.remerubio.com/sala_1.png',
        width: 1200,
        height: 630,
        alt: 'Reme Rubio Psicologia',
      },
    ],
    locale: 'ca_ES',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ca">
      <head>
        <link
          rel="preload"
          href="/fonts/Lagasignatica.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GowunDodum-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-GowunDodum`}
      >
        {children}
      </body>
    </html>
  );
}
