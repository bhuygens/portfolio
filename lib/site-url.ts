/**
 * Canonical site origin for metadata (Open Graph, Twitter) and absolute URLs.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://huygens.io).
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
