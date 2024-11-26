import { default as defaultCommands } from './default';
import { default as schedule } from './schedule';

import { Composer } from 'grammy';

const commands = new Composer<APP.Context>();

commands.use(defaultCommands);
commands.use(schedule);

export default commands;
