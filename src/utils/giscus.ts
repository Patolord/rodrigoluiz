/**
 * Initialize Giscus comments with dynamic theme and language support
 */
export function initGiscus() {
  const giscusContainer = document.querySelector(".giscus");
  if (!giscusContainer) return;

  // Get current theme
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "cupcake";
  // Map DaisyUI themes to Giscus themes
  const giscusTheme = currentTheme === "dracula" ? "dark" : "light";

  // Get current language from URL path
  const isEnglish = window.location.pathname.startsWith("/en");
  const giscusLang = isEnglish ? "en" : "pt";

  const script = document.createElement("script");
  script.src = "https://giscus.app/client.js";
  script.setAttribute("data-repo", "Patolord/rodrigoluiz");
  script.setAttribute("data-repo-id", "R_kgDONHbHLw");
  script.setAttribute("data-category", "General");
  script.setAttribute("data-category-id", "DIC_kwDONHbHL84Cw6ZN");
  script.setAttribute("data-mapping", "pathname");
  script.setAttribute("data-strict", "0");
  script.setAttribute("data-reactions-enabled", "1");
  script.setAttribute("data-emit-metadata", "0");
  script.setAttribute("data-input-position", "top");
  script.setAttribute("data-theme", giscusTheme);
  script.setAttribute("data-lang", giscusLang);
  script.setAttribute("data-loading", "lazy");
  script.setAttribute("crossorigin", "anonymous");
  script.async = true;

  giscusContainer.appendChild(script);
}

/**
 * Update Giscus theme when the site theme changes
 */
function updateGiscusTheme() {
  const iframe = document.querySelector(
    "iframe.giscus-frame"
  ) as HTMLIFrameElement;
  if (!iframe) return;

  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "cupcake";
  const giscusTheme = currentTheme === "dracula" ? "dark" : "light";

  iframe.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: giscusTheme } } },
    "https://giscus.app"
  );
}

/**
 * Setup theme change observer for Giscus
 */
export function setupGiscusThemeObserver() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "data-theme"
      ) {
        updateGiscusTheme();
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
}

