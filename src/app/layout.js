import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/NavMenu";

import Script from "next/script";

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
  description: "Psicología per tot el cicle vital",
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
         <Script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="7e46edd0-370f-41bb-988d-97fcfc1e48c5"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-GowunDodum`}
      >
        <div className="min-h-screen flex flex-col items-center p-4 sm:p-8 bg-white">
          <div className="max-w-7xl w-full shadow-[5px_5px_25px_10px_rgba(0,_0,_0,_0.15)]">
            {/*bg-[#F7ECE9]*/}
            <header className="text-center p-6 sm:p-10">

              <h1 className="text-3xl sm:text-7xl font-Lagasignatica text-gray-900 mt-10">Reme Rubio</h1>
              <p className="text-gray-500 mt-2 text-2xl">Psicologia per tot el cicle vital</p>

              <NavMenu />
            </header>

            {children}
            <footer className="max-w-7xl w-full mt-8 text-gray-600">
              <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <p>&copy; {new Date().getFullYear()} Reme Rubio. Tots els drets reservats.</p>
                  </div>
                  <div className="text-center md:text-right">
                    <p>Contacte: consulta@remerubio.com</p>
                    <p>Telèfon: +34 654 023 745</p>
                    <p>Adreça: Carrer Santa Esperança, 3, 2n. Granollers</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>

      </body>
    </html>
  );
}
