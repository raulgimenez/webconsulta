"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { getLocalizedPath } from "@/lib/i18n-config";
import LanguageSelector from "./LanguageSelector";

export default function NavMenu({ dict, lang }) {
  const pathname = usePathname();

  // Obtener las URLs localizadas
  const homeUrl = getLocalizedPath('/', lang)
  const servicesUrl = getLocalizedPath('/services', lang)
  const profileUrl = getLocalizedPath('/profile', lang)
  const contactUrl = getLocalizedPath('/contact', lang)

  return (
    <div className="mt-6 pt-6 border-t border-neutral-200/80">
      <nav className="flex justify-center space-x-8 text-gray-700 group">
        <Link
          href={homeUrl}
          className={cn(
            "text-lg font-medium transition-colors duration-200",
            pathname === homeUrl || pathname === `/${lang}`
              ? "text-black border-b-2 border-black pb-1"
              : "hover:text-black"
          )}
        >
          {dict.nav.home}
        </Link>
        <Link
          href={servicesUrl}
          className={cn(
            "text-lg font-medium transition-colors duration-200",
            pathname === servicesUrl
              ? "text-black border-b-2 border-black pb-1"
              : "hover:text-black"
          )}
        >
          {dict.nav.services}
        </Link>
        <Link
          href={profileUrl}
          className={cn(
            "text-lg font-medium transition-colors duration-200",
            pathname === profileUrl
              ? "text-black border-b-2 border-black pb-1"
              : "hover:text-black"
          )}
        >
          {dict.nav.profile}
        </Link>
        <Link
          href={contactUrl}
          className={cn(
            "text-lg font-medium transition-colors duration-200",
            pathname === contactUrl
              ? "text-black border-b-2 border-black pb-1"
              : "hover:text-black"
          )}
        >
          {dict.nav.contact}
        </Link>
      </nav>

      {/* Selector de idioma en la esquina superior derecha */}
      <div className="absolute top-4 right-4">
        <LanguageSelector currentLang={lang} />
      </div>
    </div>
  );
}
