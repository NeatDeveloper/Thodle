import { z } from 'zod';

export const BuildingOrderByRelevanceFieldEnumSchema = z.enum(['title','nonVerbalName','address']);

export default BuildingOrderByRelevanceFieldEnumSchema;
