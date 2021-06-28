const express = require("express");
const redis = require("redis");
// const process = require("process");

const VISITS = "visits";
const REDIS_HOST = "redis-server";
const REDIS_PORT = 6379;

const client = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
});
client.set(VISITS, 0);

client.on("error", function (error) {
  console.error(error);
});

const app = express();

app.get("/", (req, res) => {
  // process.exit(0);
  client.get(VISITS, (err, visits) => {
    res.json({ visits: `Number of visits ${visits}` });
    client.set(VISITS, parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("🚀 ~ file: index.js ~ line 10 ~ app.listen ~ 8081", 8081);
});
