import { default as defaultCommands } from './default';

import { Composer } from 'grammy';

const commands = new Composer<APP.Context>();

commands.use(defaultCommands);

export default commands;
