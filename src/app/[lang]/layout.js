import NavMenu from "@/components/NavMenu";
import HeaderContent from "@/components/HeaderContent";
import FooterContent from "@/components/FooterContent";
import { getDictionary, getAvailableLocales } from "./dictionaries";
import Script from "next/script";
import { redirect } from "next/navigation";
import { defaultLocale, locales } from "@/lib/locale";

// Generar rutas estáticas para todos los idiomas
export async function generateStaticParams() {
  const locales = getAvailableLocales()
  return locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({ params }) {
  const { lang } = await params
  if (!locales.includes(lang)) {
    redirect(`/${defaultLocale}`)
  }

  const dict = await getDictionary(lang)

  return {
    title: dict.meta.siteTitle,
    description: dict.meta.siteDescription,
    alternates: {
      canonical: `https://www.remerubio.com/${lang}/`,
    },
    keywords: dict.meta.keywords,
    openGraph: {
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
      url: `https://www.remerubio.com/${lang}/`,
      siteName: 'Reme Rubio',
      images: [
        {
          url: 'https://www.remerubio.com/sala_1.png',
          width: 1200,
          height: 630,
          alt: dict.meta.siteOgImageAlt,
        },
      ],
      locale: lang === 'ca' ? 'ca_ES' : lang === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
  }
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params
  if (!locales.includes(lang)) {
    redirect(`/${defaultLocale}`)
  }

  const dict = await getDictionary(lang)

  return (
    <>
      <Script
        defer
        data-domain="remerubio.com"
        src="https://plausible.kharaksystem.com/js/script.pageview-props.tagged-events.js"
        strategy="afterInteractive"
      />

      <Script id="plausible-init" strategy="afterInteractive">
        {`
          window.plausible = window.plausible || function() {
            (window.plausible.q = window.plausible.q || []).push(arguments)
          }
        `}
      </Script>

      <div className="min-h-screen flex flex-col items-center p-4 sm:p-8 bg-white">
        <div className="max-w-7xl w-full shadow-[5px_5px_25px_10px_rgba(0,_0,_0,_0.15)]">
          {/*bg-[#F7ECE9]*/}
          <header className="relative text-center p-6 sm:p-10">
            <HeaderContent dict={dict} />
            <NavMenu dict={dict} lang={lang} />
          </header>

          {children}
          <FooterContent dict={dict} />
        </div>
      </div>
    </>
  );
}
