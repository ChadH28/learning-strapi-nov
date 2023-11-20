"use strict";

/**
 * `page-populating` middleware
 */

// If you want to bring back as much information as possible, use the wildcard * operator.
const populate = "*";
// but if you want better page performance and low data fetching you can filter the query
// populate: [
//   "cover",
//   "category",
//   "blocks",
//   "authorsBio",
//   "seo"
// ],

module.exports = (/** @type {any} */ config, { strapi }) => {
  return async (
    /** @type {{ query: any; }} */ ctx,
    /** @type {() => any} */ next
  ) => {
    strapi.log.info("In page-populating middleware.");
    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
