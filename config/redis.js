const util = require("util");
const redis = require("redis");

let client;

module.exports = {
  getClient: () => {
    if (!client) {
      let redisConfig = {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
      };

      if (process.env.NODE_ENV === "production") {
        redisConfig.password = process.env.REDIS_PASSWORD;
      }

      client = redis.createClient(redisConfig);
      client.hget = util.promisify(client.hget);
    }

    return client;
  },
};
