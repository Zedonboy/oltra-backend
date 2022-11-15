'use strict';
const crypto = require("crypto")

const ethers = require("ethers")
/**
 * session controller
 */
 const getService = (name) => {
    return strapi.plugin('users-permissions').service(name);
  };
  
const { createCoreController } = require('@strapi/strapi').factories;
let keyCache = {}
module.exports = createCoreController('api::session.session', ({strapi}) => ({
    find(ctx) {
        let key = crypto.randomBytes(32).toString("hex")

        keyCache[key] = true

        setTimeout(() => {
            keyCache[key] = undefined
        }, 1000 * 60)

        return {key}

    },

    create(ctx) {
        let {key, signature, address} = ctx.request.body
        if (keyCache[key]) {
            let output = ethers.utils.verifyMessage(key, signature);

            if(address === output) {
                // Start session.
                return {jwt: getService("jwt").issue({address})}
            }
        }
        
    }
}));
