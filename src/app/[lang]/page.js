import Image from "next/image"
import FaqAccordion from "@/components/FaqAccordion"
import DesignerCta from "@/components/DesignerCta"
import { getDictionary } from './dictionaries'
import { getCanonicalUrl } from "@/lib/i18n-config"

export async function generateMetadata({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const canonical = getCanonicalUrl('/', lang)

  return {
    title: dict.home.metaTitle,
    description: dict.home.metaDescription,
    keywords: dict.home.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: dict.home.metaTitle,
      description: dict.home.metaDescription,
      url: canonical,
      siteName: 'Reme Rubio',
      type: 'website',
      locale: lang === 'ca' ? 'ca_ES' : lang === 'es' ? 'es_ES' : 'en_US',
      images: [
        {
          url: 'https://www.remerubio.com/sala_1.png',
          width: 1200,
          height: 630,
          alt: dict.meta.siteOgImageAlt,
        },
      ],
    },
  }
}

export default async function HomePage({params}) {

  const { lang } = await params
  const dict = await getDictionary(lang)
  const servicesHref = getCanonicalUrl('/services', lang).replace('https://www.remerubio.com', '')
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dict.home.seo.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
  const lifeStageStyles = [
    "bg-vanilla text-gray-700",
    "bg-jasmine text-gray-700",
    "bg-sunset text-gray-700",
    "bg-wheat text-gray-700",
    "bg-ash_gray text-gray-500",
    "bg-verdigris text-gray-300",
    "bg-blue_munsell text-gray-300",
    "bg-teal text-gray-300",
    "bg-cerulean text-gray-300",
  ];

  return (
        <main className="pb-20">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
          <div className="mt-1">
            <Image
              src="/bg.jpeg"
              alt={dict.home.imageAlt}
              width={1024}
              height={100}
              className="w-full h-[500px] object-fill"
            />
          </div>
          <section className="max-w-4xl mx-auto px-6 bg-white">
            <h1 className="text-3xl font-light text-gray-800 my-16 text-center">
              {dict.home.titleLine1} <br /> {dict.home.titleLine2}
            </h1>
          </section>
          <div className="p-6 sm:p-10 text-xl italic text-gray-500">
            <p className="max-w-2xl mx-auto pb-5">
              {dict.home.intro}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm ">
              {dict.home.lifeStages.map((lifeStage, index) => (
                <div
                  key={lifeStage}
                  className={`w-40 h-40 rounded-full m-5 inline-flex items-center justify-center ${lifeStageStyles[index]} text-xl font-bold transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl cursor-pointer`}
                >
                  {lifeStage}
                </div>
              ))}
            </div>
          </div>

          <section className="max-w-4xl mx-auto px-6 py-14 space-y-7 text-gray-700 border-t border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 text-center">
              {dict.home.seo.servicesTitle}
            </h2>
            <p className="text-lg leading-8">
              {dict.home.seo.servicesIntro}
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {dict.home.seo.complementaryServices.map((service) => (
                <div
                  key={service}
                  className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white px-4 py-4 text-base leading-6 shadow-sm"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-verdigris" aria-hidden="true" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 text-center">
              <DesignerCta href={servicesHref}>
                {dict.home.seo.servicesCta}
              </DesignerCta>
            </div>
          </section>

          <section className="max-w-4xl mx-auto px-6 py-14 space-y-6 text-gray-700 border-t border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 text-center">
              {dict.home.seo.benefitsTitle}
            </h2>
            {dict.home.seo.benefitsParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8">
                {paragraph}
              </p>
            ))}
          </section>

          <section className="max-w-4xl mx-auto px-6 py-14 space-y-6 text-gray-700 border-t border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 text-center">
              {dict.home.seo.processTitle}
            </h2>
            {dict.home.seo.processParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8">
                {paragraph}
              </p>
            ))}
          </section>

          <section className="max-w-4xl mx-auto px-6 py-14 space-y-6 text-gray-700 border-t border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 text-center">
              {dict.home.seo.faqTitle}
            </h2>
            <FaqAccordion faqs={dict.home.seo.faqs} />
          </section>
        </main>
  );
}
