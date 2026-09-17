import { defaultLocale, getLocaleFromPathname } from "./lib/locale";

const assetExtensions = new Set([
  ".css", ".js", ".mjs", ".map", ".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".ico", ".txt", ".xml", ".json", ".woff", ".woff2", ".ttf", ".otf",
]);

function hasAssetExtension(pathname) {
  const lastSegment = pathname.split("/").pop() || "";
  const dotIndex = lastSegment.lastIndexOf(".");
  return dotIndex >= 0 && assetExtensions.has(lastSegment.slice(dotIndex).toLowerCase());
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (
      request.method === "GET" &&
      url.pathname !== "/" &&
      !getLocaleFromPathname(url.pathname) &&
      !hasAssetExtension(url.pathname)
    ) {
      url.pathname = "/" + defaultLocale + url.pathname;
      return Response.redirect(url, 302);
    }

    // Let the Assets binding serve index.html and apply the SPA fallback.
    // Rendering index.html through a second fetch can return an empty 200
    // response in production, leaving the browser with a blank document.
    return env.ASSETS.fetch(request);
  },
};
