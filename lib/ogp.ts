import ogs from "open-graph-scraper";

export interface OGPData {
  url: string;
  domain: string;
  title: string | null;
  description: string | null;
  imageUrl: string | null;
  siteName: string | null;
}

export async function fetchOGP(url: string): Promise<OGPData> {
  let domain = "";
  try {
    const parsedUrl = new URL(url);
    domain = parsedUrl.hostname;
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
    const { result, error } = await ogs({
      url,
      timeout: 5000,
      fetchOptions: {
        headers: {
          "user-agent":
            "mozilla/5.0 (macintosh; intel mac os x 10_15_7) applewebkit/537.36 (khtml, like gecko) chrome/120.0.0.0 safari/537.36",
        },
      },
    });

    if (error || !result) {
      return fallback;
    }

    let imageUrl: string | null = null;
    if (result.ogImage && result.ogImage.length > 0) {
      const img = result.ogImage[0];
      if (img.url) {
        imageUrl = img.url;
        if (imageUrl.startsWith("/")) {
          const origin = new URL(url).origin;
          imageUrl = `${origin}${imageUrl}`;
        }
      }
    }

    return {
      url: result.ogUrl || url,
      domain,
      title: result.ogTitle || null,
      description: result.ogDescription || null,
      imageUrl,
      siteName: result.ogSiteName || null,
    };
  } catch {
    return fallback;
  }
}
