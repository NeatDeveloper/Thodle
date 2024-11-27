import Bull from 'bull';
import options from './options';
import botAPI from '@app/bot/api';


export default () => {
    const mailing = new Bull<{ id: number, message: string }>('mailing', options);

    mailing.process(async (data, done) => {
        try {
            await botAPI.sendMessage(data.data.id, data.data.message);

            done();
        } catch {
            done();
        }
    });

    return mailing;
}
