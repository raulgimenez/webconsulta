import FaqAccordion from "@/components/FaqAccordion";
import DesignerCta from "@/components/DesignerCta";
import { getCanonicalUrl } from "@/lib/i18n-config";
export default function HomePage({ dict, lang }) {
  const servicesHref = getCanonicalUrl("/services", lang).replace("https://www.remerubio.com", "");
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.home.seo.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="mt-1">
        <img src="/bg.jpeg" alt={dict.home.imageAlt} width="1024" height="100" className="h-[500px] w-full object-fill" />
      </div>
      <section className="mx-auto max-w-4xl bg-white px-6">
        <h1 className="my-16 text-center text-3xl font-light text-gray-800">
          {dict.home.titleLine1} <br /> {dict.home.titleLine2}
        </h1>
      </section>
      <div className="p-6 text-xl italic text-gray-500 sm:p-10">
        <p className="mx-auto max-w-2xl pb-5">{dict.home.intro}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
          {dict.home.lifeStages.map((lifeStage, index) => (
            <div
              key={lifeStage}
              className={`m-5 inline-flex h-40 w-40 cursor-pointer items-center justify-center rounded-full ${lifeStageStyles[index]} text-xl font-bold transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl`}
            >
              {lifeStage}
            </div>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-4xl space-y-7 border-t border-gray-100 px-6 py-14 text-gray-700">
        <h2 className="text-center text-2xl font-light text-gray-900 sm:text-3xl">{dict.home.seo.servicesTitle}</h2>
        <p className="text-lg leading-8">{dict.home.seo.servicesIntro}</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {dict.home.seo.complementaryServices.map((service) => (
            <div key={service} className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white px-4 py-4 text-base leading-6 shadow-sm">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-verdigris" aria-hidden="true" />
              <span>{service}</span>
            </div>
          ))}
        </div>
        <div className="pt-4 text-center">
          <DesignerCta href={servicesHref}>{dict.home.seo.servicesCta}</DesignerCta>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-6 border-t border-gray-100 px-6 py-14 text-gray-700">
        <h2 className="text-center text-2xl font-light text-gray-900 sm:text-3xl">{dict.home.seo.benefitsTitle}</h2>
        {dict.home.seo.benefitsParagraphs.map((paragraph) => <p key={paragraph} className="text-lg leading-8">{paragraph}</p>)}
      </section>

      <section className="mx-auto max-w-4xl space-y-6 border-t border-gray-100 px-6 py-14 text-gray-700">
        <h2 className="text-center text-2xl font-light text-gray-900 sm:text-3xl">{dict.home.seo.processTitle}</h2>
        {dict.home.seo.processParagraphs.map((paragraph) => <p key={paragraph} className="text-lg leading-8">{paragraph}</p>)}
      </section>

      <section className="mx-auto max-w-4xl space-y-6 border-t border-gray-100 px-6 py-14 text-gray-700">
        <h2 className="text-center text-2xl font-light text-gray-900 sm:text-3xl">{dict.home.seo.faqTitle}</h2>
        <FaqAccordion faqs={dict.home.seo.faqs} />
      </section>
    </main>
  );
}
