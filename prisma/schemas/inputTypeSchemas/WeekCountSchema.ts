import { z } from 'zod';

export const WeekCountSchema = z.enum(['FIRST','SECOND']);

export type WeekCountType = `${z.infer<typeof WeekCountSchema>}`

export default WeekCountSchema;
