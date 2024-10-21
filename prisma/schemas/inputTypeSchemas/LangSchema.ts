import { z } from 'zod';

export const LangSchema = z.enum(['RU','EN']);

export type LangType = `${z.infer<typeof LangSchema>}`

export default LangSchema;
