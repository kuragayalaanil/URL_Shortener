import wrapAsync from "../../utils/tryCatchWrapper.js";
import { findUrlFromShortUrl } from "../dao/shortUrl.js";

import {
  CreateShortUrlWithOutUser,
  CreateShortUrlWithUser,
} from "./../services/shortUrlService.js";

export const createShortUrl = wrapAsync(async (req, res) => {
  const data = req.body;

  let shortUrl;
  if (req.user) {
    shortUrl = await CreateShortUrlWithUser(data.url, req.user._id, data.slug);
  } else {
    shortUrl = await CreateShortUrlWithOutUser(data.url);
  }
  res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl });
});

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
  const { id } = req.params;
  const url = await findUrlFromShortUrl(id);
  if (!url) {
    throw new Error("Short URL Not Found");
  }
  res.redirect(url.full_url);
});

export const createCustomShortUrl = wrapAsync(async (req, res) => {
  const { url, slug } = req.body;

  let shortUrl;

  if (req.user) {
    shortUrl = await CreateShortUrlWithUser(url, req.user._id);
  } else {
    shortUrl = await CreateShortUrlWithOutUser(url);
  }

  res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl });
});
