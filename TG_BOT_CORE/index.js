const { Bot } = require('grammy');
const bot = new Bot(process.env.BOT_TOKEN);

bot.command('start', (ctx) => ctx.reply('🚀 Ядро системы запущено и работает!'));

bot.start({
    drop_pending_updates: true,
    onStart: (info) => console.log('✅ БОТ ОЖИЛ: @' + info.username)
}).catch(err => console.error('Ошибка:', err));
