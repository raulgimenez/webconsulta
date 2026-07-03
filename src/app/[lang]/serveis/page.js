import Image from "next/image";
import { MinimalistServicesList } from "@/components/ServiceList";
import { getDictionary, getCanonicalUrl } from "../dictionaries";

export async function generateMetadata({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return {
    title: dict.nav.services,
    description: dict.services.metaDescription,
    alternates: {
      canonical: getCanonicalUrl('/servicios', lang),
    },
    openGraph: {
      title: `${dict.nav.services} | Reme Rubio`,
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

export default async function Serveis({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <main className="pb-20">
      {/* Imágenes de las salas */}
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
    </main>
  )
}
