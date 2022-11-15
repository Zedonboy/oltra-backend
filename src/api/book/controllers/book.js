"use strict";

/**
 * book controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::book.book", ({ strapi }) => ({
  async read(ctx) {
    let id = ctx.params.id;

    let book = await strapi.query("api::book.book").findOne({
      where: {
        id,
      },
      populate: {
        pages: true,
      },
    });

    if (book) {
      return book;
    } else {
      return ctx.notFound("Book was not found");
    }
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi
      .service("api::book.book")
      .findOne(id, query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    sanitizedEntity.pages = undefined;
    return this.transformResponse(sanitizedEntity);
  },

  async find(ctx) {
    if (!ctx.state.address)
      return ctx.forbidden("You are not authorized, try and login");
    let records = await strapi.query("api::book.book").findMany({
      where: {
        author_address: ctx.state.address,
      },
    });

    return records;
  },

  async create(ctx) {
    let book = ctx.request.body;
    if(!ctx.state.address) return ctx.forbidden("You are not connected")
    let pages = book.pages;
    delete book.pages;
    let bookEntity = await strapi.query("api::book.book").create({
      data: { ...book, author_address: ctx.state.address },
    });

    let savePromises = pages.map((v) => {
      v.book = bookEntity.id;
      return strapi.query("api::page.page").create({
        data: v,
      });
    });

    Promise.all(savePromises).then((data) => {
      bookEntity.pages = data;
    });

    return bookEntity;
  },

  async findPublic(ctx) {
    let records = await strapi.query("api::book.book").findMany();

    return records;
  },
}));
