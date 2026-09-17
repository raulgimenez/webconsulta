import { i18nConfig } from "./i18n-config";
import { defaultLocale, locales } from "./locale";

const routeKeys = Object.keys(i18nConfig.routes);

export function resolveRoute(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  const hasLocale = locales.includes(segments[0]);
  const lang = hasLocale ? segments[0] : defaultLocale;
  const localizedPath = "/" + segments.slice(hasLocale ? 1 : 0).join("/");
  const normalizedPath = localizedPath === "/" ? "/" : localizedPath.replace(/\/$/, "");

  for (const key of routeKeys) {
    if (i18nConfig.routes[key][lang] === normalizedPath) {
      return { lang, page: key };
    }
  }

  return { lang, page: "home" };
}

export function getOgLocale(lang) {
  return lang === "ca" ? "ca_ES" : lang === "es" ? "es_ES" : "en_US";
}
