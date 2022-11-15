"use strict";

/**
 * book router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/books/read/:id",
      handler: "book.read",
    },
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/books/:id",
      handler: "book.findOne",
    },
    {
      method: "POST",
      path: "/books",
      handler: "book.create",
    },
    {
      method: "GET",
      path: "/books",
      handler: "book.find",
    },
    {
      method: "GET",
      path: "/public/books",
      handler: "book.findPublic",
    },
  ],
};
