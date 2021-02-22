import { Composer } from 'telegraf';
import { getQueue } from '../tgcalls';

export const queueHandler = Composer.command('dikha', ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        return;
    }

    const queue = getQueue(chat.id);
    const message =
        queue && queue.length > 0
            ? queue.map((url, index) => `Haan bhaiya full dekh lo mera\n\n${index + 1}. ${url}`).join('\n')
            : 'kal hi toh dikhaya tha full, firse dekh kyu dikhaun.';

    ctx.reply(message);
});
