"use client";

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { localeStorageKey } from '@/lib/locale';

const languageOptions = [
  { code: 'ca', name: 'Català', flag: 'CA' }, // Bandera de Cataluña con CA
  { code: 'es', name: 'Español', flag: 'ES' },
  { code: 'en', name: 'English', flag: 'GB' }
];

export default function LanguageSelector({ currentLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage = languageOptions.find(lang => lang.code === currentLang);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (languageCode) => {
    window.localStorage.setItem(localeStorageKey, languageCode);

    // Mapeo de rutas por idioma
    const routeMap = {
      '/serveis': {
        ca: '/ca/serveis',
        es: '/es/servicios',
        en: '/en/services'
      },
      '/trajectoria': {
        ca: '/ca/trajectoria',
        es: '/es/trayectoria',
        en: '/en/background'
      },
      '/contacte': {
        ca: '/ca/contacte',
        es: '/es/contacto',
        en: '/en/contact'
      }
    };

    // Obtener la ruta actual sin el idioma
    const currentPath = pathname.replace(`/${currentLang}`, '') || '/';

    // Si es la página principal
    if (currentPath === '/') {
      router.push(`/${languageCode}`);
      setIsOpen(false);
      return;
    }

    // Buscar la ruta correspondiente en el nuevo idioma
    const newPath = routeMap[currentPath]?.[languageCode] || `/${languageCode}${currentPath}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-xs">{currentLanguage?.flag}</span>
        <span>{currentLanguage?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languageOptions.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 hover:bg-gray-100 transition-colors duration-200 ${
                  currentLang === language.code ? 'bg-gray-50 text-indigo-600' : 'text-gray-700'
                }`}
                role="menuitem"
              >
                <span className="text-xs">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
                {currentLang === language.code && (
                  <svg className="w-4 h-4 ml-auto text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
