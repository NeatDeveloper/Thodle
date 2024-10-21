import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','tgID','lastName','firstName','username','role','lang','isBot','isPremium','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
