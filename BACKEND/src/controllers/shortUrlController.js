import wrapAsync from "../../utils/tryCatchWrapper.js";
import { findUrlFromShortUrl } from "../dao/shortUrl.js";

import {
  CreateShortUrlWithOutUser,
  CreateShortUrlWithUser,
} from "./../services/shortUrlService.js";

export const createShortUrl = wrapAsync(async (req, res, next) => {
  const { url } = req.body;
  const shortUrl = await CreateShortUrlWithOutUser(url);
  res.send({ shortUrl: process.env.APP_URL + shortUrl });
});

export const redirectFromShortUrl = wrapAsync(async (req, res, next) => {
  const { id } = req.params;
  const url = await findUrlFromShortUrl(id);
  if (!url) {
    throw new Error("Short URL Not Found");
  }
  res.redirect(url.full_url);
});
