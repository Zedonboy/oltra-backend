"use strict";

/**
 * book-copy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::book-copy.book-copy",
  ({ strapi }) => ({
    async nftdata(ctx) {
      return "ok";
    },

    async read(ctx) {
      let id = ctx.params.id;
      let bCopy = await strapi.query("api::book-copy.book-copy").findOne({
        where: {
          id,
        },
      });

      if (!bCopy) {
        return ctx.notFound("This book doesnt exist");
      }

      if (bCopy.owner === ctx.state.address) {
        let book = await strapi.query("api::book.book").findOne({
          where: {
            id: bCopy.book.id,
          },
          populate: {
            pages,
          },
        });

        return book;
      } else {
        return ctx.forbidden("You do not own this book");
      }
    },

    async find(ctx) {
      if (!ctx.state.address)
        return ctx.forbidden("You are not authorized, try and login");
      let records = await strapi.query("api::book-copy.book-copy").findMany({
        where: {
          owner: ctx.state.address,
        },

        populate: {
          book: true,
        },
      });

      return records
    },
  })
);
