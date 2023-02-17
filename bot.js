const TG = require("telegram-bot-api");
require("dotenv").config();

const api = new TG({
  token: process.env.TOKEN,
});

api.getMe().then(console.log).catch(console.err);
