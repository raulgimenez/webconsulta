import { useEffect, useMemo, useSyncExternalStore } from "react";
import HeaderContent from "@/components/HeaderContent";
import FooterContent from "@/components/FooterContent";
import NavMenu from "@/components/NavMenu";
import { getDictionary } from "@/i18n/dictionaries";
import { applyMetadata } from "@/lib/head";
import { detectLocale, localeStorageKey } from "@/lib/locale";
import { getPageMetadata } from "@/lib/metadata";
import { resolveRoute } from "@/lib/routes";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import ProfilePage from "@/pages/ProfilePage";
import ContactPage from "@/pages/ContactPage";

function subscribe(callback) {
  window.addEventListener("popstate", callback);
  window.addEventListener("app:navigation", callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("app:navigation", callback);
  };
}

function getSnapshot() {
  return window.location.pathname;
}

function navigate(path) {
  if (path === window.location.pathname) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("app:navigation"));
  window.scrollTo({ top: 0 });
}

const pageComponents = {
  home: HomePage,
  services: ServicesPage,
  profile: ProfilePage,
  contact: ContactPage,
};

export default function App() {
  const pathname = useSyncExternalStore(subscribe, getSnapshot);

  useEffect(() => {
    if (pathname !== "/") return;

    let savedLocale = null;
    try {
      savedLocale = window.localStorage.getItem(localeStorageKey);
    } catch {
      savedLocale = null;
    }

    const acceptLanguage = navigator.languages?.join(",") || navigator.language;
    const locale = detectLocale({ savedLocale, acceptLanguage });
    window.history.replaceState({}, "", `/${locale}`);
    window.dispatchEvent(new Event("app:navigation"));
  }, [pathname]);

  const { lang, page } = useMemo(() => resolveRoute(pathname), [pathname]);
  const dict = getDictionary(lang);
  const Page = pageComponents[page] || HomePage;

  useEffect(() => {
    applyMetadata(getPageMetadata(page, dict, lang), lang);
  }, [dict, lang, page]);

  return (
    <div className="flex min-h-screen flex-col items-center bg-white p-4 sm:p-8">
      <div className="w-full max-w-7xl shadow-[5px_5px_25px_10px_rgba(0,_0,_0,_0.15)]">
        <header className="relative p-6 text-center sm:p-10">
          <HeaderContent dict={dict} />
          <NavMenu dict={dict} lang={lang} pathname={pathname} navigate={navigate} />
        </header>
        <Page dict={dict} lang={lang} />
        <FooterContent dict={dict} />
      </div>
    </div>
  );
}
