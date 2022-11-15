const getService = (name) => {
  return strapi.plugin("users-permissions").service(name);
};

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (!ctx.request.headers["authorization"]) return await next()
    let auth = ctx.request.headers["authorization"].split(" ")
    if(auth[0] !== "web3auth") return await next()
    try {
      let payload = await getService("jwt").verify(auth[1]);
      ctx.state.address = payload.address;
      await next();
    } catch (error) {
      await next();
    }
  };
};
