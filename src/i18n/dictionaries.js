import ca from "../../i18n/locales/ca.json";
import es from "../../i18n/locales/es.json";
import en from "../../i18n/locales/en.json";

const dictionaries = { ca, es, en };

export function getDictionary(locale) {
  return dictionaries[locale] || dictionaries.ca;
}

export function getAvailableLocales() {
  return Object.keys(dictionaries);
}
