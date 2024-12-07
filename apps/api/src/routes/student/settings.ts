import prisma, { userInclude } from '@repo/db';
import { CreateException, factory } from 'helpers';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

const settings = factory.createApp().basePath('/settings');

const settingsSchema = z.object({
    miniapp: z.optional(z.object({
        fullscreen: z.optional(z.boolean({
            invalid_type_error: 'Неверный тип данных',
        })),
        roundedSettings: z.optional(z.boolean({
            invalid_type_error: 'Неверный тип данных',
        })),
        rounded: z.optional(z.boolean({
            invalid_type_error: 'Неверный тип данных',
        })),
        theme: z.optional(z.string({
            message: 'Должно быть строковое значение',
        }).min(4, {
            message: 'Минимум 4 символа'
        }).max(16, {
            message: 'Максимум 16 символов'
        })),
        schema: z.optional(z.string({
            message: 'Должно быть строковое значение',
        }).min(4, {
            message: 'Минимум 4 символа'
        }).max(16, {
            message: 'Максимум 16 символов'
        })),
        toastPosition: z.optional(z.enum(['T', 'B', 'TL', 'TR', 'BR', 'BL']))
    })),
    mailing: z.optional(z.object({
        isPossible: z.optional(z.boolean({
            message: 'Должно быть булево значение'
        }))
    }))
})

settings.patch('/',
    zValidator('json', settingsSchema, result => {
        if (!result.success) throw CreateException('BAD_REQUEST', { message: result.error.message })
    }),
    async __context__ => {
        const { miniapp, mailing } = await __context__.req.json<z.infer<typeof settingsSchema>>();

        const user = __context__.get('user');

        if (miniapp !== undefined) {
            if (miniapp.fullscreen !== undefined) {
                await prisma.miniappSettings.update({
                    where: { id: user.id },
                    data: {
                        fullscreen: miniapp.fullscreen
                    }
                });

                return __context__.text('ok');
            }
            if (miniapp.rounded !== undefined) {
                await prisma.miniappSettings.update({
                    where: { id: user.id },
                    data: {
                        rounded: miniapp.rounded
                    }
                });

                return __context__.text('ok');
            }
            if (miniapp.roundedSettings !== undefined) {
                await prisma.miniappSettings.update({
                    where: { id: user.id },
                    data: {
                        roundedSettings: miniapp.roundedSettings
                    }
                });

                return __context__.text('ok');
            }
            if (miniapp.toastPosition !== undefined) {
                await prisma.miniappSettings.update({
                    where: { id: user.id },
                    data: {
                        toastPosition: miniapp.toastPosition
                    }
                });

                return __context__.text('ok');
            }

            if (miniapp.theme !== undefined && miniapp.schema !== undefined) {
                await prisma.miniappSettings.update({
                    where: { id: user.id },
                    data: {
                        theme: miniapp.theme,
                        schema: miniapp.schema,
                    }
                });

                return __context__.text('ok');
            } else throw CreateException('BAD_REQUEST', { message: 'Укажите и тему и схему' })
        }

        if (mailing !== undefined) {
            if (mailing.isPossible !== undefined) {
                await prisma.mailingSettings.update({
                    where: { id: user.id },
                    data: {
                        isPossible: mailing.isPossible
                    }
                });

                return __context__.text('ok');
            }
        }

        throw CreateException('BAD_REQUEST', { message: 'Не удалось ничего обновить!' });
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
