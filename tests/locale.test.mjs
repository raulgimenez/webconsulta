import assert from "node:assert/strict";
import test from "node:test";
import { detectLocale, getLocaleFromPathname } from "../src/lib/locale.js";

test("detects the explicit locale from the pathname", () => {
  assert.equal(getLocaleFromPathname("/es/contacto"), "es");
  assert.equal(getLocaleFromPathname("/ca"), "ca");
  assert.equal(getLocaleFromPathname("/serveis"), null);
});

test("uses a valid saved browser locale before browser preferences on root access", () => {
  assert.equal(detectLocale({ savedLocale: "es", acceptLanguage: "en-US,en;q=0.9" }), "es");
});

test("uses the highest priority supported browser language on first access", () => {
  assert.equal(detectLocale({ acceptLanguage: "en-US,en;q=0.9,es;q=0.8,ca;q=0.7" }), "en");
  assert.equal(detectLocale({ acceptLanguage: "fr-FR,es;q=0.9,en;q=0.8" }), "es");
});

test("falls back to the default locale when there is no supported preference", () => {
  assert.equal(detectLocale({ acceptLanguage: "fr-FR,fr;q=0.9" }), "ca");
});
