import { bot } from '../bot';

import { playHandler } from './chalu';
import { queueHandler } from './dikha';
import { pauseHandler } from './ruk';
import { skipHandler } from './nikal';

export const initHandlers = (): void => {
    bot.use(playHandler);
    bot.use(queueHandler);
    bot.use(pauseHandler);
    bot.use(skipHandler);
};
