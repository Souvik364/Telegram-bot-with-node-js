const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Load features (MODULES)
require('./features/welcome')(bot);
require('./features/forceJoin')(bot);
require('./features/menu')(bot);
require('./features/autoReply')(bot); // must exist
require('./features/shop')(bot);
require('./features/support')(bot);

bot.launch();

console.log("🤖 Bot is running...");

// Enable graceful stop (important for Render)
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
