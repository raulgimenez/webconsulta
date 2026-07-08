import ProfileContent from "@/components/ProfileContent";
import { getDictionary, getCanonicalUrl } from "../dictionaries";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.profile.metaTitle,
    description: dict.profile.metaDescription,
    keywords: dict.profile.keywords,
    alternates: {
      canonical: getCanonicalUrl('/trayectoria', lang),
    },
    openGraph: {
      title: `${dict.profile.metaTitle} | Reme Rubio`,
      description: dict.profile.metaDescription,
      url: getCanonicalUrl('/trayectoria', lang),
      siteName: 'Reme Rubio',
      type: 'profile',
      locale: lang === 'ca' ? 'ca_ES' : lang === 'es' ? 'es_ES' : 'en_US',
      images: [
        {
          url: '/images/og-trajectoria.png',
          width: 1200,
          height: 630,
          alt: dict.profile.ogImageAlt,
        },
      ],
    },
  };
}

export default async function ProfessionalsPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const contactHref = getCanonicalUrl('/contacto', lang).replace('https://www.remerubio.com', '');

  return <ProfileContent profile={dict.profile} contactHref={contactHref} />;
}
