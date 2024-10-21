import { z } from 'zod';

export const GroupHeadLevelSchema = z.enum(['PRIMARY','SECONDARY']);

export type GroupHeadLevelType = `${z.infer<typeof GroupHeadLevelSchema>}`

export default GroupHeadLevelSchema;
