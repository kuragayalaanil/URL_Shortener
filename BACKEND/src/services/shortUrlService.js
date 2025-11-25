import { generateNanoId } from "../../utils/helper.js";
import { saveShortUrl } from "../dao/shortUrl.js";

export const CreateShortUrlWithOutUser = async (url) => {
  const shortUrl = generateNanoId(7);
  if (!shortUrl) {
    throw new Error("Short URL not Generated");
  }
  await saveShortUrl(shortUrl, url);
  return shortUrl;
};

export const CreateShortUrlWithUser = async (url, userId) => {
  const shortUrl = generateNanoId(7);
  await saveShortUrl(shortUrl, url, userId);
  return shortUrl;
};
