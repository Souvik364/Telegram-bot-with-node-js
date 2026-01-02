module.exports = (bot) => {
  const CHANNEL = '@your_channel_username'; // change this

  bot.use(async (ctx, next) => {
    if (!ctx.from) return;

    try {
      const member = await ctx.telegram.getChatMember(CHANNEL, ctx.from.id);
      if (member.status === 'left') {
        return ctx.reply(
          `🚨 Please join ${CHANNEL} to use this bot.`
        );
      }
      await next();
    } catch {
      await next();
    }
  });
};
