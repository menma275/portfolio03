export interface OGPData {
  url: string;
  domain: string;
  title: string | null;
  description: string | null;
  imageUrl: string | null;
  siteName: string | null;
}

function getMetaContent(html: string, property: string): string | null {
  const pattern1 = new RegExp(
    `<meta[^>]*(?:property|name)=["'](?:og:|twitter:)?${property}["'][^>]*content=["']([^"']*)["']`,
    "i",
  );
  const pattern2 = new RegExp(
    `<meta[^>]*content=["']([^"']*)["'][^>]*(?:property|name)=["'](?:og:|twitter:)?${property}["']`,
    "i",
  );
  const match = html.match(pattern1) || html.match(pattern2);
  return match ? match[1] : null;
}

export async function fetchOGP(url: string): Promise<OGPData> {
  let domain = "";
  try {
    domain = new URL(url).hostname;
  } catch {
    domain = url;
  }

  const fallback: OGPData = {
    url,
    domain,
    title: null,
    description: null,
    imageUrl: null,
    siteName: null,
  };

  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(5000),
      headers: {
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!res.ok) return fallback;
    const html = await res.text();

    const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    const title =
      getMetaContent(html, "title") || (titleMatch ? titleMatch[1] : null);
    const description = getMetaContent(html, "description");
    let imageUrl = getMetaContent(html, "image");
    if (imageUrl && imageUrl.startsWith("/")) {
      try {
        imageUrl = `${new URL(url).origin}${imageUrl}`;
      } catch {
        // keep imageUrl as is
      }
    }
    const siteName = getMetaContent(html, "site_name");

    return {
      url,
      domain,
      title: title ? title.trim() : null,
      description: description ? description.trim() : null,
      imageUrl,
      siteName: siteName ? siteName.trim() : null,
    };
  } catch {
    return fallback;
  }
}
