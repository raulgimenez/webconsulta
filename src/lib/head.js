function setMeta(attribute, key, content) {
  if (!content) return;
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute === "name" ? "name" : "property", key);
    document.head.appendChild(tag);
  }
  tag.dataset.appManaged = "true";
  tag.setAttribute("content", Array.isArray(content) ? content.join(", ") : content);
}

export function applyMetadata(metadata, lang) {
  document.documentElement.lang = lang;
  document.title = metadata.title || "Reme Rubio";

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.dataset.appManaged = "true";
  canonical.href = metadata.canonical;

  setMeta("name", "description", metadata.description);
  setMeta("name", "keywords", metadata.keywords);
  setMeta("property", "og:title", metadata.openGraph?.title || metadata.title);
  setMeta("property", "og:description", metadata.openGraph?.description || metadata.description);
  setMeta("property", "og:url", metadata.openGraph?.url || metadata.canonical);
  setMeta("property", "og:site_name", metadata.openGraph?.siteName || "Reme Rubio");
  setMeta("property", "og:type", metadata.openGraph?.type || "website");
  setMeta("property", "og:locale", metadata.openGraph?.locale);
  setMeta("property", "og:image", metadata.openGraph?.image?.url);
  setMeta("property", "og:image:alt", metadata.openGraph?.image?.alt);
}
