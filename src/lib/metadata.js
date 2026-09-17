import { getCanonicalUrl } from "./i18n-config";

export function getOgLocale(lang) {
  return lang === "ca" ? "ca_ES" : lang === "es" ? "es_ES" : "en_US";
}

export function getPageMetadata(page, dict, lang) {
  if (page === "services") {
    const canonical = getCanonicalUrl("/servicios", lang);
    return {
      title: dict.services.metaTitle,
      description: dict.services.metaDescription,
      keywords: dict.services.keywords,
      canonical,
      openGraph: {
        title: `${dict.services.metaTitle} | Reme Rubio`,
        description: dict.services.metaDescription,
        url: canonical,
        siteName: "Reme Rubio",
        type: "website",
        locale: getOgLocale(lang),
        image: { url: "/images/fondo_landing.png", alt: dict.services.ogImageAlt },
      },
    };
  }

  if (page === "profile") {
    const canonical = getCanonicalUrl("/trayectoria", lang);
    return {
      title: dict.profile.metaTitle,
      description: dict.profile.metaDescription,
      keywords: dict.profile.keywords,
      canonical,
      openGraph: {
        title: `${dict.profile.metaTitle} | Reme Rubio`,
        description: dict.profile.metaDescription,
        url: canonical,
        siteName: "Reme Rubio",
        type: "profile",
        locale: getOgLocale(lang),
        image: { url: "/images/og-trajectoria.png", alt: dict.profile.ogImageAlt },
      },
    };
  }

  if (page === "contact") {
    const canonical = getCanonicalUrl("/contacto", lang);
    return {
      title: dict.contact.metaTitle,
      description: dict.contact.metaDescription,
      keywords: dict.contact.keywords,
      canonical,
      openGraph: {
        title: `${dict.contact.metaTitle} | Reme Rubio`,
        description: dict.contact.metaDescription,
        url: canonical,
        siteName: "Reme Rubio",
        type: "website",
        locale: getOgLocale(lang),
        image: { url: "/images/og-contacte.png", alt: dict.contact.ogImageAlt },
      },
    };
  }

  const canonical = getCanonicalUrl("/", lang);
  return {
    title: dict.home.metaTitle,
    description: dict.home.metaDescription,
    keywords: dict.home.keywords,
    canonical,
    openGraph: {
      title: dict.home.metaTitle,
      description: dict.home.metaDescription,
      url: canonical,
      siteName: "Reme Rubio",
      type: "website",
      locale: getOgLocale(lang),
      image: { url: "https://www.remerubio.com/sala_1.png", alt: dict.meta.siteOgImageAlt },
    },
  };
}
