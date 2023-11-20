'use strict';

/**
 * store-items service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::store-items.store-items');
