module.exports = (bot) => {
  bot.hears(['hi', 'hello', 'hey'], (ctx) => {
    ctx.reply('😊 Hello! Type /menu to see options.');
  });
};
