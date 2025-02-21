import Image from "next/image";
import Link from "next/link";
import Profile from "@/components/Profile"

export default function Professionals() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8 bg-white font-GowunDodum">
      <header className="w-full max-w-3xl mb-8">
        {/* <Image src="/es-logo.svg" alt="Espai Sira Logo" width={150} height={40} priority className="ml-6 sm:ml-10" /> */}
      </header>

      <div className="max-w-7xl w-full shadow-[5px_5px_25px_10px_rgba(0,_0,_0,_0.15)]">
        {" "}
        {/*bg-[#F7ECE9]*/}
        {/* <div className="flex justify-end mb-10">
          <button className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Open menu">
            MENU <span aria-hidden="true">&#8212;</span>
          </button>
        </div> */}
        <header className="text-center p-6 sm:p-10">
          {/* <h1 className="text-3xl sm:text-4xl font-light text-gray-900">Espai sira</h1>
          <p className="text-gray-500 mt-2">Psicología de tot el cicle vital</p> */}
          <h1
            id="logo2"
            className="text-3xl sm:text-4xl font-light text-gray-900 flex justify-center"
          >
            <Image
              src="/es2-logo.svg"
              alt="Espai Sira Logo"
              width={300}
              height={100}
              priority
              className="mx-auto"
            />
          </h1>

          <nav className="mt-6 flex justify-center space-x-6 text-gray-900">
            <Link
              href="/atencio"
              className="border-b-2 border-transparent hover:border-black pb-1 transition-colors"
            >
              Atenció
            </Link>
            <Link href="/" className="border-b-2 border-transparent hover:border-black pb-1 transition-colors">
              Espai
            </Link>
            <Link
              href="/professionals"
              className="border-b-2 border-black pb-1"
            >
              Professionals
            </Link>
            <Link
              href="#"
              className="border-b-2 border-transparent hover:border-black pb-1 transition-colors"
            >
              Contacte
            </Link>
          </nav>
        </header>
        <main className="pb-20">
            <div className="mt-10">
            <Image
                src="/bg-1.png"
                alt="Modern home interior"
                width={1024}
                height={100}
                className="w-full"
            />
            </div>
            <h1 className="font-AllisonScript text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-[-25px] sm:mt-[-30px] md:mt-[-40px] lg:mt-[-50px] pl-10 ml-5 md:ml-10">Professionals</h1>
            {/* <Profile /> */}
            <div className="mt-10 p-12 sm:p-20 font-GowunDodum">
                <div className="grid grid-cols-1 gap-8">
                    {/* Aquí puedes añadir tarjetas o información sobre los profesionales */}
                    <div className="bg-stone-200 p-6 rounded-lg shadow-sm">
                        <div className="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{backgroundImage: "url('/images/psico1.jpg')"}}></div>
                        <h2 className="text-xl font-semibold mb-2">Caoutar Zarhouni</h2>
                        <p className="text-gray-500 mt-2">N.Col. 12345</p>
                        <p className="text-gray-600">Especialidad: Psicología Clínica</p>
                        <p className="mt-4">Breve descripción del profesional y su experiencia...</p>
                    </div>
                    <div className="bg-stone-200 p-6 rounded-lg shadow-sm">
                        <div className="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{backgroundImage: "url('/images/psico2.jpg')"}}></div>
                        <h2 className="text-xl font-semibold mb-2">Reme Rúbio</h2>
                        <p className="text-gray-500 mt-2">N.Col. 12346</p>
                        <p className="text-gray-600">Especialidad: Psicología Clínica</p>
                        <p className="mt-4">Breve descripción del profesional y su experiencia...</p>
                    </div>
                    {/* Repite este bloque para cada profesional */}
                </div>
            </div>
            <div className="mt-10 p-12 sm:p-20 font-GowunDodum">
              <div href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <Image
                      src="/images/psico1.jpg"
                      alt="Espai Sira Logo"
                      width={300}
                      height={300}
                      priority
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Caoutar Zarhouni</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </div>
              </div>
            </div>
        </main>
    

      </div>
      <footer className="max-w-7xl w-full mt-8 text-gray-600">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Espai Sira. Tots els drets reservats.</p>
            </div>
            <div className="text-center md:text-right">
              <p>Contacte: info@espaisira.com</p>
              <p>Telèfon: +34 123 456 789</p>
              <p>Adreça: Carrer Example, 123, 08001 Barcelona</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
