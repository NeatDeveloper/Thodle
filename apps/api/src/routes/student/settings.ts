import prisma, { userInclude } from '@repo/db';
import { CreateException, factory } from 'helpers';
import { zValidator } from '@hono/zod-validator';
import { settingsSchema, type SettingsRequest, type SettingsSchema } from '@repo/schemas';

const settings = factory.createApp().basePath('/settings');


settings.patch('/',
    zValidator('json', settingsSchema, result => {
        if (!result.success) throw CreateException('BAD_REQUEST', { message: result.error.message })
    }),
    async __context__ => {
        const { miniapp, mailing, schedule } = await __context__.req.json<SettingsSchema>();

        const user = __context__.get('user');

        let _return: Partial<SettingsRequest> = {};

        if(miniapp !== undefined) {
            const _miniapp = await prisma.miniappSettings.update({
                where: { id: user.id },
                data: miniapp,
                omit: {
                    id: true,
                }
            });

            _return.miniapp = _miniapp;
        }

        if(mailing !== undefined) {
            const _mailing = await prisma.mailingSettings.update({
                where: { id: user.id },
                data: mailing,
                omit: {
                    id: true
                }
            });

            _return.mailing = _mailing;
        }

        if(schedule !== undefined) {
            const _schedule = await prisma.scheduleSettings.update({
                where: { id: user.id },
                data: schedule,
                omit: {
                    id: true
                }
            });

            _return.schedule = _schedule;
        }

        if(!Object.keys(_return)) throw CreateException('BAD_REQUEST', { message: 'Не удалось ничего обновить!' });

        return __context__.json<Partial<SettingsRequest>>(_return);
    });

settings.get('/', async __context__ => {
    const user = __context__.get('user');

    const _settings = await prisma.settings.findUnique({
        where: { id: user.id },
        ...userInclude.settings
    });

    return __context__.json(_settings);
});

export default settings;
