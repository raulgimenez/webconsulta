// Configuración de URLs por idioma
export const i18nConfig = {
  locales: ['ca', 'es', 'en'],
  defaultLocale: 'ca',

  // Mapeo de rutas por idioma
  routes: {
    // Páginas principales
    home: {
      ca: '/',
      es: '/',
      en: '/'
    },

    // Servicios
    services: {
      ca: '/serveis',
      es: '/servicios',
      en: '/services'
    },

    // Perfil/Trayectoria
    profile: {
      ca: '/trajectoria',
      es: '/trayectoria',
      en: '/background'
    },

    // Contacto
    contact: {
      ca: '/contacte',
      es: '/contacto',
      en: '/contact'
    }
  }
}

// Función para obtener la URL correcta según el idioma
export function getLocalizedPath(path, locale) {
  const pathKey = path.replace('/', '') || 'home'

  if (pathKey === 'home') {
    return `/${locale}`
  }

  const route = i18nConfig.routes[pathKey]
  if (route && route[locale]) {
    return `/${locale}${route[locale]}`
  }

  // Fallback a la ruta original
  return `/${locale}${path}`
}

// Función para obtener la URL canónica
export function getCanonicalUrl(path, locale) {
  const baseUrl = 'https://www.remerubio.com'
  const localizedPath = getLocalizedPath(path, locale)
  return `${baseUrl}${localizedPath}`
}
