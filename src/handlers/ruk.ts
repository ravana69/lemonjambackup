import { Composer } from 'telegraf';
import { pause } from '../tgcalls';

export const pauseHandler = Composer.command(['ruk', 'chalu'], async ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        return;
    }

    const paused = await pause(chat.id);
    const message = paused === null ? "Tera baap baja ke gaya kya." : paused ? 'ruk saale.' : 'chalu.';

    await ctx.reply(message);
});
