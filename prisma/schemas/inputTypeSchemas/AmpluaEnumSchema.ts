import { z } from 'zod';

export const AmpluaEnumSchema = z.enum(['UNDEFINED','STUDENT','CURATOR','GROUP_HEAD','LECTOR','TUTOR']);

export type AmpluaEnumType = `${z.infer<typeof AmpluaEnumSchema>}`

export default AmpluaEnumSchema;
