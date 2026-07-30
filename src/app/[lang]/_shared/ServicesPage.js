import Image from "next/image";
import DesignerCta from "@/components/DesignerCta";
import { MinimalistServicesList } from "@/components/ServiceList";
import { getDictionary, getCanonicalUrl } from "../dictionaries";

export async function generateMetadata({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return {
    title: dict.services.metaTitle,
    description: dict.services.metaDescription,
    keywords: dict.services.keywords,
    alternates: {
      canonical: getCanonicalUrl('/servicios', lang),
    },
    openGraph: {
      title: `${dict.services.metaTitle} | Reme Rubio`,
      description: dict.services.metaDescription,
      url: getCanonicalUrl('/servicios', lang),
      siteName: 'Reme Rubio',
      type: 'website',
      locale: lang === 'ca' ? 'ca_ES' : lang === 'es' ? 'es_ES' : 'en_US',
      images: [
        {
          url: '/images/sala_2.png',
          width: 1200,
          height: 630,
          alt: dict.services.ogImageAlt,
        },
      ],
    },
  }
}

export default async function ServicesPage({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const contactHref = getCanonicalUrl('/contacto', lang).replace('https://www.remerubio.com', '')

  return (
    <main className="pb-20">
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto px-4">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/sala_1.png"
              alt={dict.services.roomAlt1}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/sala_2.png"
              alt={dict.services.roomAlt2}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <MinimalistServicesList title={dict.services.title} services={dict.services.items} />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-14 space-y-6 text-gray-700 border-t border-gray-100 mt-14">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-900 text-center">
          {dict.services.seo.methodologyTitle}
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {dict.services.seo.methodologyParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="rounded-lg border border-gray-200 bg-white p-5 text-base leading-7 text-gray-600 shadow-sm"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-14 space-y-7 text-gray-700 border-t border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-900 text-center">
          {dict.services.seo.benefitsTitle}
        </h2>
        <p className="text-lg leading-8">{dict.services.seo.benefitsIntro}</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {dict.services.seo.benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white px-4 py-4 text-base leading-6 shadow-sm"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-verdigris" aria-hidden="true" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-14 space-y-6 text-gray-700 border-t border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-900 text-center">
          {dict.services.seo.consultationTypesTitle}
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {dict.services.seo.consultationTypesParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="rounded-lg border border-gray-200 bg-white p-5 text-base leading-7 text-gray-600 shadow-sm"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="pt-4 text-center">
          <DesignerCta href={contactHref}>
            {dict.services.seo.contactCta}
          </DesignerCta>
        </div>
      </section>
    </main>
  )
}
