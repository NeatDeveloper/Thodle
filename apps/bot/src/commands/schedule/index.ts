import { Composer } from 'grammy';
import API from 'helpers/api';

const commands = new Composer<APP.Context>();

const api = API();

commands.command('schedule', async (__context__) => {
    const response = await api.get('schedule');

    __context__.reply(await response.text());
});

export default commands;
