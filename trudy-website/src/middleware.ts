import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

/**
 * Locale routing without extra dependencies.
 * Any path that doesn't already start with a supported locale is redirected to
 * the default locale (German — the brand's primary market). "/" → "/de".
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and any file with an extension (static assets).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
