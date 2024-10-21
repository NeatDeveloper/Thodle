import { z } from 'zod';

export const UniversityOrderByRelevanceFieldEnumSchema = z.enum(['name','fullName','city']);

export default UniversityOrderByRelevanceFieldEnumSchema;
