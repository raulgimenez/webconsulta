import Image from "next/image";
import { MinimalistServicesList } from "@/components/ServiceList";

export const metadata = {
  title: 'Serveis terapèutics',
  description:
    'Consulta els serveis terapèutics oferts per Reme Rubio: teràpia sistèmica per a famílies, infants, adolescents i adults.',
  alternates: {
    canonical: 'https://www.remerubio.com/serveis',
  },
  openGraph: {
    title: 'Serveis terapèutics | Reme Rubio',
    description:
      'Descobreix els serveis de suport psicològic que ofereix Reme Rubio a Granollers: acompanyament emocional, familiar i personal.',
    url: 'https://www.remerubio.com/serveis',
    siteName: 'Reme Rubio',
    type: 'website',
    locale: 'ca_ES',
    images: [
      {
        url: '/images/sala_2.png',
        width: 1200,
        height: 630,
        alt: 'Espai de teràpia a Granollers',
      },
    ],
  },
};

export default function Serveis() {

  const services = [
    "Acompanyament en la criança de fills/es des de l'embaràs en endavant",
    "Acompanyament en l'establiment de rutines d'alimentació, son i estimulació en nadons",
    "Acompanyament davant la conducta desafiant dels fills/es",
    "Acompanyament en l'adopció",
    "Acompanyament en l'acolliment",
    "Acompanyament davant les situacions de crisi personal i/o familiar",
    "Acompanyament en situacions de dol",
    "Acompanyament en divorcis i separacions amb o sense fill/es a càrrec",
    "Acompanyaments a famílies reconstituïdes",
    "Acompanyament en processos LGTBIQ+",
    "Acompanyament en diagnòstics de fibromialgia",
    "Acompanyament en addicions",
    "Acompanyament davant de simptomatologia de TCA",
    "Acompanyament davant de situacions traumàtiques",
    "Acompanyament a persones que han sofert abús sexual",
    "Acompanyament davant de simptomatologia d'ansietat",
    "Acompanyament davant de simptomatologia depressiva",
    "Acompanyament davant de simptomatologia fòbica",
    "Acompanyament davant de simptomatologia obsessiva",
    "Supervisions a professionals de la Psicologia",
    "Supervisions a professionals de l'Educació"
  ];

  return (
    <main className="pb-20">
      {/* Imágenes de las salas */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto px-4">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/sala_1.png"
              alt="Sala de consulta 1"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/sala_2.png"
              alt="Sala de consulta 2"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <MinimalistServicesList services={services} />
      </div>
    </main>
  )
}
