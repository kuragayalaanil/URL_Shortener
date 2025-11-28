import { generateNanoId } from "../../utils/helper.js";
import { getCustomShortUrl, saveShortUrl } from "../dao/shortUrl.js";

export const CreateShortUrlWithOutUser = async (url) => {
  const shortUrl = generateNanoId(7);
  if (!shortUrl) {
    throw new Error("Short URL not Generated");
  }
  await saveShortUrl(shortUrl, url);
  return shortUrl;
};

export const CreateShortUrlWithUser = async (url, userId, slug = null) => {
  const shortUrl = slug || generateNanoId(7);
  const exists = await getCustomShortUrl(slug);
  if (exists) throw new Error("This custom url already Exists");
  await saveShortUrl(shortUrl, url, userId);
  return shortUrl;
};
