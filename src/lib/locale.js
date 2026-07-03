export const locales = ["ca", "es", "en"];
export const defaultLocale = "ca";
export const localeStorageKey = "preferredLocale";

export function getLocaleFromPathname(pathname) {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return locales.includes(firstSegment) ? firstSegment : null;
}

function parseAcceptLanguage(acceptLanguage) {
  if (!acceptLanguage) {
    return [];
  }

  return acceptLanguage
    .split(",")
    .map((part, index) => {
      const [rawTag, ...params] = part.trim().split(";");
      const qParam = params.find((param) => param.trim().startsWith("q="));
      const q = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1;

      return {
        tag: rawTag.toLowerCase(),
        q: Number.isFinite(q) ? q : 0,
        index,
      };
    })
    .filter(({ tag, q }) => tag && tag !== "*" && q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index);
}

export function detectLocale({ savedLocale, acceptLanguage } = {}) {
  if (savedLocale && locales.includes(savedLocale)) {
    return savedLocale;
  }

  for (const { tag } of parseAcceptLanguage(acceptLanguage)) {
    const language = tag.split("-")[0];
    if (locales.includes(language)) {
      return language;
    }
  }

  return defaultLocale;
}
