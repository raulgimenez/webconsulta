import DesignerCta from "@/components/DesignerCta";
import { MinimalistServicesList } from "@/components/ServiceList";
import { getCanonicalUrl } from "@/lib/i18n-config";
export default function ServicesPage({ dict, lang }) {
  const contactHref = getCanonicalUrl("/contacto", lang).replace("https://www.remerubio.com", "");

  return (
    <main className="pb-20">
      <div className="mb-12 px-4">
        <div role="img" aria-label={dict.services.imageAlt} className="relative mx-auto h-[40vh] w-full max-w-6xl overflow-hidden rounded-[40px] bg-[#E8EDE7] sm:h-[55vh] lg:h-[65vh]">
          <img src="/images/fondo_landing.png" alt={dict.services.imageAlt} className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="mt-6">
        <MinimalistServicesList title={dict.services.title} services={dict.services.items} />
      </div>

      <section className="mx-auto mt-14 max-w-4xl space-y-6 border-t border-gray-100 px-6 py-14 text-gray-700">
        <h2 className="text-center text-2xl font-light text-gray-900 sm:text-3xl">{dict.services.seo.methodologyTitle}</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {dict.services.seo.methodologyParagraphs.map((paragraph) => (
            <p key={paragraph} className="rounded-lg border border-gray-200 bg-white p-5 text-base leading-7 text-gray-600 shadow-sm">{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-7 border-t border-gray-100 px-6 py-14 text-gray-700">
        <h2 className="text-center text-2xl font-light text-gray-900 sm:text-3xl">{dict.services.seo.benefitsTitle}</h2>
        <p className="text-lg leading-8">{dict.services.seo.benefitsIntro}</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {dict.services.seo.benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white px-4 py-4 text-base leading-6 shadow-sm">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-verdigris" aria-hidden="true" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-6 border-t border-gray-100 px-6 py-14 text-gray-700">
        <h2 className="text-center text-2xl font-light text-gray-900 sm:text-3xl">{dict.services.seo.consultationTypesTitle}</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {dict.services.seo.consultationTypesParagraphs.map((paragraph) => (
            <p key={paragraph} className="rounded-lg border border-gray-200 bg-white p-5 text-base leading-7 text-gray-600 shadow-sm">{paragraph}</p>
          ))}
        </div>
        <div className="pt-4 text-center">
          <DesignerCta href={contactHref}>{dict.services.seo.contactCta}</DesignerCta>
        </div>
      </section>
    </main>
  );
}
