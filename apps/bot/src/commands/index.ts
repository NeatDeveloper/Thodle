import { default as defaultCommands } from './default';

import { Composer } from 'grammy';

const commands = new Composer();

commands.use(defaultCommands);

export default commands;
