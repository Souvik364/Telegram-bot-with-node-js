module.exports = (bot) => {
  const items = ['📘 Ebook', '🎥 Course', '🎁 Gift'];

  bot.action('SHOP', (ctx) => {
    ctx.reply(
      `🛍️ Shop Items:\n\n${items.join('\n')}\n\nType item name to buy.`
    );
  });

  items.forEach((item) => {
    bot.hears(item, (ctx) => {
      ctx.reply(`✅ You bought ${item} (demo purchase).`);
    });
  });
};
