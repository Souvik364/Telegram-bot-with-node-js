const { Markup } = require('telegraf');

module.exports = (bot) => {
  bot.command('menu', (ctx) => {
    ctx.reply(
      '📋 Main Menu',
      Markup.inlineKeyboard([
        [Markup.button.callback('🛒 Shop', 'SHOP')],
        [Markup.button.callback('📞 Support', 'SUPPORT')],
        [Markup.button.callback('ℹ️ About', 'ABOUT')]
      ])
    );
  });

  bot.action('ABOUT', (ctx) => {
    ctx.reply('🤖 This is a modular Telegram bot built with Node.js.');
  });
};
