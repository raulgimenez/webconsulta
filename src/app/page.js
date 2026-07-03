"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { detectLocale, localeStorageKey } from "@/lib/locale";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    let savedLocale = null;

    try {
      savedLocale = window.localStorage.getItem(localeStorageKey);
    } catch {
      savedLocale = null;
    }

    const acceptLanguage = navigator.languages?.join(",") || navigator.language;
    const locale = detectLocale({ savedLocale, acceptLanguage });

    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
