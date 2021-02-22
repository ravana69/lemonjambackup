import { Composer } from 'telegraf';
import { pause } from '../tgcalls';

export const pauseHandler = Composer.command(['ruk', 'chalu'], async ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        return;
    }

    const paused = await pause(chat.id);
    const message = paused === null ? "apne bulaya hai kya jaan." : paused ? 'Ruk jati hoon tumhare liye jaan.' : 'chalu ho jao mere saath.';

    await ctx.reply(message);
});
