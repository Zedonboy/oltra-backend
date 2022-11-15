'use strict';

/**
 * book-copy router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    routes : [
        { // Path defined with an URL parameter
            method: 'GET',
            path: '/book-copies/nft/:id', 
            handler: 'book-copy.nftdata',
          },

          { // Path defined with an URL parameter
            method: 'GET',
            path: '/book-copies/read/:id', 
            handler: 'book-copy.read',
          },
    ]
}
