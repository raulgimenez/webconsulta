import 'server-only'

const dictionaries = {
  ca: () => import('../../../i18n/locales/ca.json').then((module) => module.default),
  es: () => import('../../../i18n/locales/es.json').then((module) => module.default),
  en: () => import('../../../i18n/locales/en.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
  if (!dictionaries[locale]) {
    throw new Error(`No dictionary found for locale: ${locale}`)
  }
  return dictionaries[locale]()
}

export const getAvailableLocales = () => {
  return Object.keys(dictionaries)
}

// Función para obtener la URL canónica
export function getCanonicalUrl(path, locale) {
  const baseUrl = 'https://www.remerubio.com'

  // Mapeo de rutas por idioma
  const routeMap = {
    '/servicios': {
      ca: '/ca/serveis',
      es: '/es/servicios',
      en: '/en/services'
    },
    '/trayectoria': {
      ca: '/ca/trajectoria',
      es: '/es/trayectoria',
      en: '/en/background'
    },
    '/contacto': {
      ca: '/ca/contacte',
      es: '/es/contacto',
      en: '/en/contact'
    }
  }

  const localizedPath = routeMap[path]?.[locale] || `/${locale}${path}`
  return `${baseUrl}${localizedPath}`
}
