import { EnvelopeIcon, PhoneIcon, MapPinIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { getDictionary, getCanonicalUrl } from "../dictionaries";

export async function generateMetadata({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return {
    title: dict.contact.metaTitle,
    keywords: dict.contact.keywords,
    openGraph: {
      title: `${dict.contact.metaTitle} | Reme Rubio`,
      description: dict.contact.metaDescription,
      url: getCanonicalUrl('/contacto', lang),
      images: [
        {
          url: '/images/og-contacte.png',
          width: 1200,
          height: 630,
          alt: dict.contact.ogImageAlt,
        },
      ],
    },
    description: dict.contact.metaDescription,
    alternates: {
      canonical: getCanonicalUrl('/contacto', lang),
    }
  }
}

export default async function ContactoPage({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Información de contacto principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-gray-900 mb-8">{dict.contact.title}</h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-600">
            <a
              href="mailto:consulta@remerubio.com"
              className="flex items-center gap-3 text-xl hover:text-gray-900 transition-colors group"
            >
              <div className="bg-blue-50 p-3 rounded-full group-hover:bg-blue-100 transition-colors">
                <EnvelopeIcon className="h-6 w-6 text-blue-600" />
              </div>
              <span>consulta@remerubio.com</span>
            </a>
            <a
              href="tel:+34654023745"
              className="flex items-center gap-3 text-xl hover:text-gray-900 transition-colors group"
            >
              <div className="bg-green-50 p-3 rounded-full group-hover:bg-green-100 transition-colors">
                <PhoneIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex flex-col items-start">
                <span>654 023 745</span>
                <span className="text-sm text-gray-500 italic">{dict.contact.noWhatsapp}</span>
              </div>
            </a>
          </div>
        </div>

        {/* Tarjetas de consulta */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Consulta Online */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <ComputerDesktopIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{dict.contact.onlineTitle}</h2>
            </div>
            <p className="text-gray-600">
              {dict.contact.onlineDescription}
            </p>
          </div>

          {/* Consulta Presencial */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-50 p-3 rounded-full">
                <MapPinIcon className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{dict.contact.inPersonTitle}</h2>
            </div>
            <div className="space-y-2 text-gray-600">
              <p className="font-medium">{dict.contact.placeName}</p>
              <p>{dict.contact.addressLine}</p>
              <p>{dict.contact.city}</p>
            </div>
          </div>
        </div>

        <section className="mt-14 space-y-7 border-t border-gray-100 pt-14 text-gray-700">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 text-center">
            {dict.contact.processTitle}
          </h2>
          <p className="text-lg leading-8">{dict.contact.processIntro}</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {dict.contact.processSteps.map((step) => (
              <div
                key={step}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white px-4 py-4 text-base leading-6 shadow-sm"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-verdigris" aria-hidden="true" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Mapa */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.690760095178!2d2.28552947644843!3d41.60772648229847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4c7e5c1db8fa9%3A0xb27494d36f2a6b3b!2sTeos%20Espai%20de%20Psicologia%20i%20Mindfulness!5e1!3m2!1ses!2ses!4v1748961596118!5m2!1ses!2ses"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
        </div>
      </div>
    </main>
  );
}
