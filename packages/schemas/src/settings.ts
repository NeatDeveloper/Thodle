import { z } from '@hono/zod-openapi';

export const settingsSchema = z.object({
    miniapp: z.optional(z.object({
        fullscreen: z.optional(z.boolean({
            invalid_type_error: 'Неверный тип данных',
        })),
        roundedSettings: z.optional(z.boolean({
            invalid_type_error: 'Неверный тип данных',
        })),
        roundedSchedule: z.optional(z.boolean({
            invalid_type_error: 'Неверный тип данных',
        })),
        rounded: z.optional(z.boolean({
            invalid_type_error: 'Неверный тип данных',
        })),
        theme: z.optional(z.enum(['Device', 'Thodle', 'Mint'])),
        presset: z.optional(z.enum(['Custom', 'Thodle'])),
        schema: z.optional(z.enum(['Auto', 'Dark', 'Light'])),
        toastPosition: z.optional(z.enum([
            'Top', 'TopLeft',
            'TopRight', 'Bottom',
            'BottomLeft', 'BottomRight'
        ]))
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

export const settingsRequest = z.object({
    miniapp: z.object({
        fullscreen: z.boolean(),
        toastPosition: z.enum([
            'Top', 'TopLeft',
            'TopRight', 'Bottom',
            'BottomLeft', 'BottomRight'
        ]),
        presset: z.enum(['Custom', 'Thodle']),
        schema: z.enum(['Auto', 'Dark', 'Light']),
        theme: z.enum(['Device', 'Thodle', 'Mint']),
        roundedSettings: z.boolean(),
        roundedSchedule: z.boolean(),
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
export type SettingsRequest = z.infer<typeof settingsRequest>;
