import prisma from '@repo/db';
import { CreateException, factory } from 'helpers';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

const settings = factory.createApp().basePath('/settings');

const settingsSchema = z.object({
    fullscreen: z.optional(z.boolean({
        invalid_type_error: 'Неверный тип данных',
    })),
    theme: z.optional(z.object({
        theme: z.string({
            message: 'Должно быть строковое значение',
        }).min(4, {
            message: 'Минимум 4 символа'
        }).max(16, {
            message: 'Максимум 16 символов'
        }),
        schema: z.string({
            message: 'Должно быть строковое значение',
        }).min(4, {
            message: 'Минимум 4 символа'
        }).max(16, {
            message: 'Максимум 16 символов'
        }),
    }))
})

settings.patch('/',
    zValidator('json', settingsSchema, result => {
        if(!result.success) throw CreateException('BAD_REQUEST', { message: result.error.message })
    }),
    async __context__ => {
        const { fullscreen, theme } = await __context__.req.json<z.infer<typeof settingsSchema>>();

        const user = __context__.get('user');

        if (fullscreen !== undefined) {
            await prisma.settings.update({
                where: { id: user.id },
                data: { fullscreen }
            });
        }

        if(theme !== undefined) {
            await prisma.themeSettings.update({
                where: { id: user.id },
                data: {
                    theme: theme.theme,
                    schema: theme.schema
                }
            })
        }

        return __context__.text('ok');
    });

export default settings;
