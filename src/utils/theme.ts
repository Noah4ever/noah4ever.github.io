export type Theme = "light" | "dark";

const SHARED_THEME_COOKIE = "thiering-theme";

function isTheme(value: string | undefined | null): value is Theme {
  return value === "light" || value === "dark";
}

export function readSharedTheme(): Theme | null {
  if (typeof document === "undefined") return null;

  const cookie = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${SHARED_THEME_COOKIE}=`));
  const value = cookie?.slice(SHARED_THEME_COOKIE.length + 1);

  return isTheme(value) ? value : null;
}

export function writeSharedTheme(theme: Theme) {
  if (typeof document === "undefined") return;

  const isThieringDomain =
    window.location.hostname === "thiering.org" ||
    window.location.hostname.endsWith(".thiering.org");
  const domain = isThieringDomain ? "; Domain=.thiering.org; Secure" : "";

  document.cookie = `${SHARED_THEME_COOKIE}=${theme}; Path=/; Max-Age=31536000; SameSite=Lax${domain}`;
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.body.dataset.theme = theme;
}
