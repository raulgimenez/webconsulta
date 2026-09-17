import { cn } from "@/lib/utils";
import { getLocalizedPath } from "@/lib/i18n-config";
import LanguageSelector from "./LanguageSelector";

function NavLink({ href, active, children, navigate }) {
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        navigate(href);
      }}
      className={cn(
        "text-lg font-medium transition-colors duration-200",
        active ? "border-b-2 border-black pb-1 text-black" : "hover:text-black"
      )}
    >
      {children}
    </a>
  );
}

export default function NavMenu({ dict, lang, pathname, navigate }) {
  const homeUrl = getLocalizedPath("/", lang);
  const servicesUrl = getLocalizedPath("/services", lang);
  const profileUrl = getLocalizedPath("/profile", lang);
  const contactUrl = getLocalizedPath("/contact", lang);

  return (
    <div className="mt-6 border-t border-neutral-200/80 pt-6">
      <nav className="flex justify-center space-x-8 text-gray-700 group">
        <NavLink href={homeUrl} active={pathname === homeUrl || pathname === `/${lang}`} navigate={navigate}>{dict.nav.home}</NavLink>
        <NavLink href={servicesUrl} active={pathname === servicesUrl} navigate={navigate}>{dict.nav.services}</NavLink>
        <NavLink href={profileUrl} active={pathname === profileUrl} navigate={navigate}>{dict.nav.profile}</NavLink>
        <NavLink href={contactUrl} active={pathname === contactUrl} navigate={navigate}>{dict.nav.contact}</NavLink>
      </nav>

      <div className="absolute right-4 top-4">
        <LanguageSelector currentLang={lang} pathname={pathname} navigate={navigate} />
      </div>
    </div>
  );
}
