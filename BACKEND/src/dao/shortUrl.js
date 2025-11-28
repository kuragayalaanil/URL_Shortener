import { ConflictError } from "../../utils/errorHandler.js";
import urlSchema from "./../models/shortUrlModel.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  try {
    const newUrl = new urlSchema({
      full_url: longUrl,
      short_url: shortUrl,
    });
    if (userId) {
      newUrl.user = userId;
    }
    await newUrl.save();
  } catch (err) {
    if (err.code === 11000) {
      throw new ConflictError("Short URL Already Exists");
    }
    throw new Error(err);
  }
};

export const findUrlFromShortUrl = async (shortUrl) => {
  return await urlSchema.findOneAndUpdate(
    { short_url: shortUrl },
    { $inc: { clicks: 1 } }
  );
};

export const getCustomShortUrl = async (slug) => {
  const exist = await urlSchema.findOne({ short_url: slug });
};
