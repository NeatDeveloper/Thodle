import { z } from 'zod';

export const UserOrderByRelevanceFieldEnumSchema = z.enum(['id','lastName','firstName','username']);

export default UserOrderByRelevanceFieldEnumSchema;
