import { z } from '@hono/zod-openapi';
import { ToastPosition as _ToastPosition } from '@prisma/client';

export const theme = z.enum(['Device', 'Thodle', 'Mint']);
export const preset = z.enum(['Custom', 'Thodle']);
export const schema = z.enum(['Auto', 'Dark', 'Light']);
export const toastPosition = z.nativeEnum(_ToastPosition);

export const settingsSchema = z.object({
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
        theme: z.optional(theme),
        preset: z.optional(preset),
        schema: z.optional(schema),
        toastPosition: z.optional(toastPosition)
    })),
    mailing: z.optional(z.object({
        isPossible: z.optional(z.boolean({
            message: 'Должно быть булево значение'
        }))
    })),
    schedule: z.optional(z.object({
        shortLessonName: z.optional(z.boolean())
    }))
}).openapi('Settings')

export const settingsObject = z.object({
    miniapp: z.object({
        fullscreen: z.boolean(),
        toastPosition,
        preset,
        schema,
        theme,
        roundedSettings: z.boolean(),
        rounded: z.boolean(),
    }),
    mailing: z.object({
        isPossible: z.boolean()
    }),
    schedule: z.object({
        shortLessonName: z.boolean()
    })
})


export type SettingsSchema = z.infer<typeof settingsSchema>;
export type SettingsObject = z.infer<typeof settingsObject>;

export type Theme = z.infer<typeof theme>
export type Schema = z.infer<typeof schema>
export type Preset = z.infer<typeof preset>
export type ToastPosition = z.infer<typeof toastPosition>
