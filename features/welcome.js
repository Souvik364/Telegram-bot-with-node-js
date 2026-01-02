module.exports = (bot) => {
  bot.start((ctx) => {
    ctx.reply(
      `👋 Hello ${ctx.from.first_name}!\n\nWelcome to our Friday Bazar Bot.\nType /menu to continue.`
    );
  });
};
