import Image from "next/image";
import Link from "next/link";

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
              className="border-b-2 border-black pb-1"
            >
              Atenció
            </Link>
            <Link href="/" className="border-b-2 border-transparent hover:border-black pb-1 transition-colors">
              Espai
            </Link>
            <Link
              href="/professionals"
              className="border-b-2 border-transparent hover:border-black pb-1 transition-colors"
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
            <h1 className="font-AllisonScript text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-[-25px] sm:mt-[-30px] md:mt-[-40px] lg:mt-[-50px] pl-10 ml-5 md:ml-10">Atenció</h1>
            <div className="mt-6 p-12 sm:p-20 font-GowunDodum">
              Aquest és un lloc creat per a l'acompanyament, l'escolta i el creixement personal. Creiem en la importància d'oferir un ambient segur i acollidor, on cada persona pugui explorar les seves emocions i desafiaments amb confiança i respecte.
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
