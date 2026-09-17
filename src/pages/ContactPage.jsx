import { EnvelopeIcon, PhoneIcon, MapPinIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
export default function ContactPage({ dict }) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h1 className="mb-8 text-4xl font-semibold text-gray-900">{dict.contact.title}</h1>
          <div className="flex flex-col items-center justify-center gap-8 text-gray-600 sm:flex-row">
            <a href="mailto:consulta@remerubio.com" className="group flex items-center gap-3 text-xl transition-colors hover:text-gray-900">
              <div className="rounded-full bg-blue-50 p-3 transition-colors group-hover:bg-blue-100">
                <EnvelopeIcon className="h-6 w-6 text-blue-600" />
              </div>
              <span>consulta@remerubio.com</span>
            </a>
            <a href="tel:+34654023745" className="group flex items-center gap-3 text-xl transition-colors hover:text-gray-900">
              <div className="rounded-full bg-green-50 p-3 transition-colors group-hover:bg-green-100">
                <PhoneIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex flex-col items-start">
                <span>654 023 745</span>
                <span className="text-sm italic text-gray-500">{dict.contact.noWhatsapp}</span>
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-full bg-blue-50 p-3">
                <ComputerDesktopIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{dict.contact.onlineTitle}</h2>
            </div>
            <p className="text-gray-600">{dict.contact.onlineDescription}</p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-full bg-green-50 p-3">
                <MapPinIcon className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{dict.contact.inPersonTitle}</h2>
            </div>
            <div className="space-y-2 text-gray-600">
              <a href={dict.contact.placeUrl} className="font-medium text-gray-700 underline-offset-4 transition-colors hover:text-gray-900 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" target="_blank" rel="noopener noreferrer">
                {dict.contact.placeName}
              </a>
              <p>{dict.contact.addressLine}</p>
              <p>{dict.contact.city}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.2108039177065!2d2.2876100764978107!3d41.60795298228439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4c70075b6750b%3A0xca451abfbc78d1be!2sEspai%20Calima!5e0!3m2!1ses!2ses!4v1785427659900!5m2!1ses!2ses"
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
