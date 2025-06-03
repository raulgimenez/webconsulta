import { EnvelopeIcon, PhoneIcon, MapPinIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Información de contacto principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-gray-900 mb-8">Reme Rubio</h1>
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
                <span className="text-sm text-gray-500 italic">No s'atenen WhatsApps</span>
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
              <h2 className="text-xl font-semibold text-gray-900">Consulta Online</h2>
            </div>
            <p className="text-gray-600">
              Sessions de psicologia a través de videoconferència, oferint la mateixa qualitat i professionalitat que en consulta presencial.
            </p>
          </div>

          {/* Consulta Presencial */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-50 p-3 rounded-full">
                <MapPinIcon className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Consulta Presencial</h2>
            </div>
            <div className="space-y-2 text-gray-600">
              <p className="font-medium">"Espai TEOS"</p>
              <p>C/. Santa Esperança, 3, 2n.</p>
              <p>Granollers</p>
            </div>
          </div>
        </div>

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
