module.exports = (bot) => {
  const SUPPORT_GROUP_ID = -1001234567890; // change this

  bot.action('SUPPORT', (ctx) => {
    ctx.reply('📩 Please type your message. Support will reply soon.');
  });

  bot.on('text', (ctx) => {
    if (ctx.chat.type === 'private') {
      ctx.telegram.forwardMessage(
        SUPPORT_GROUP_ID,
        ctx.chat.id,
        ctx.message.message_id
      );
    }
  });
};
