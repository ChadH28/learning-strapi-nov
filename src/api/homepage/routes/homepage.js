"use strict";

/**
 * homepage router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::homepage.homepage", {
  config: {
    find: {
      middlewares: ["api::homepage.page-populating"],
    },
    findOne: {
      middlewares: ["api::homepage.page-populating"],
    },
  },
});
