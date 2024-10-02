import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const PetScalarFieldEnumSchema = z.enum(['id','petName','species','weight','percentOfWeight','breed','birthdate','neutered']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const SpeciesSchema = z.enum(['dog','cat']);

export type SpeciesType = `${z.infer<typeof SpeciesSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PET SCHEMA
/////////////////////////////////////////

export const PetSchema = z.object({
  species: SpeciesSchema,
  id: z.number().int(),
  petName: z.string(),
  weight: z.number().int(),
  percentOfWeight: z.number().int(),
  breed: z.string(),
  birthdate: z.coerce.date().nullable(),
  neutered: z.boolean().nullable(),
})

export type Pet = z.infer<typeof PetSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// PET
//------------------------------------------------------

export const PetSelectSchema: z.ZodType<Prisma.PetSelect> = z.object({
  id: z.boolean().optional(),
  petName: z.boolean().optional(),
  species: z.boolean().optional(),
  weight: z.boolean().optional(),
  percentOfWeight: z.boolean().optional(),
  breed: z.boolean().optional(),
  birthdate: z.boolean().optional(),
  neutered: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const PetWhereInputSchema: z.ZodType<Prisma.PetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PetWhereInputSchema),z.lazy(() => PetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PetWhereInputSchema),z.lazy(() => PetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  petName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  species: z.union([ z.lazy(() => EnumSpeciesFilterSchema),z.lazy(() => SpeciesSchema) ]).optional(),
  weight: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  percentOfWeight: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  breed: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  birthdate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  neutered: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export const PetOrderByWithRelationInputSchema: z.ZodType<Prisma.PetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  petName: z.lazy(() => SortOrderSchema).optional(),
  species: z.lazy(() => SortOrderSchema).optional(),
  weight: z.lazy(() => SortOrderSchema).optional(),
  percentOfWeight: z.lazy(() => SortOrderSchema).optional(),
  breed: z.lazy(() => SortOrderSchema).optional(),
  birthdate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  neutered: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const PetWhereUniqueInputSchema: z.ZodType<Prisma.PetWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => PetWhereInputSchema),z.lazy(() => PetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PetWhereInputSchema),z.lazy(() => PetWhereInputSchema).array() ]).optional(),
  petName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  species: z.union([ z.lazy(() => EnumSpeciesFilterSchema),z.lazy(() => SpeciesSchema) ]).optional(),
  weight: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  percentOfWeight: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  breed: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  birthdate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  neutered: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
}).strict());

export const PetOrderByWithAggregationInputSchema: z.ZodType<Prisma.PetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  petName: z.lazy(() => SortOrderSchema).optional(),
  species: z.lazy(() => SortOrderSchema).optional(),
  weight: z.lazy(() => SortOrderSchema).optional(),
  percentOfWeight: z.lazy(() => SortOrderSchema).optional(),
  breed: z.lazy(() => SortOrderSchema).optional(),
  birthdate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  neutered: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PetCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PetAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PetMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PetSumOrderByAggregateInputSchema).optional()
}).strict();

export const PetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PetScalarWhereWithAggregatesInputSchema),z.lazy(() => PetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PetScalarWhereWithAggregatesInputSchema),z.lazy(() => PetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  petName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  species: z.union([ z.lazy(() => EnumSpeciesWithAggregatesFilterSchema),z.lazy(() => SpeciesSchema) ]).optional(),
  weight: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  percentOfWeight: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  breed: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  birthdate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  neutered: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export const PetCreateInputSchema: z.ZodType<Prisma.PetCreateInput> = z.object({
  petName: z.string(),
  species: z.lazy(() => SpeciesSchema),
  weight: z.number().int(),
  percentOfWeight: z.number().int(),
  breed: z.string(),
  birthdate: z.coerce.date().optional().nullable(),
  neutered: z.boolean().optional().nullable()
}).strict();

export const PetUncheckedCreateInputSchema: z.ZodType<Prisma.PetUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  petName: z.string(),
  species: z.lazy(() => SpeciesSchema),
  weight: z.number().int(),
  percentOfWeight: z.number().int(),
  breed: z.string(),
  birthdate: z.coerce.date().optional().nullable(),
  neutered: z.boolean().optional().nullable()
}).strict();

export const PetUpdateInputSchema: z.ZodType<Prisma.PetUpdateInput> = z.object({
  petName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  species: z.union([ z.lazy(() => SpeciesSchema),z.lazy(() => EnumSpeciesFieldUpdateOperationsInputSchema) ]).optional(),
  weight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  percentOfWeight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  neutered: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PetUncheckedUpdateInputSchema: z.ZodType<Prisma.PetUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  petName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  species: z.union([ z.lazy(() => SpeciesSchema),z.lazy(() => EnumSpeciesFieldUpdateOperationsInputSchema) ]).optional(),
  weight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  percentOfWeight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  neutered: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PetCreateManyInputSchema: z.ZodType<Prisma.PetCreateManyInput> = z.object({
  id: z.number().int().optional(),
  petName: z.string(),
  species: z.lazy(() => SpeciesSchema),
  weight: z.number().int(),
  percentOfWeight: z.number().int(),
  breed: z.string(),
  birthdate: z.coerce.date().optional().nullable(),
  neutered: z.boolean().optional().nullable()
}).strict();

export const PetUpdateManyMutationInputSchema: z.ZodType<Prisma.PetUpdateManyMutationInput> = z.object({
  petName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  species: z.union([ z.lazy(() => SpeciesSchema),z.lazy(() => EnumSpeciesFieldUpdateOperationsInputSchema) ]).optional(),
  weight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  percentOfWeight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  neutered: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PetUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PetUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  petName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  species: z.union([ z.lazy(() => SpeciesSchema),z.lazy(() => EnumSpeciesFieldUpdateOperationsInputSchema) ]).optional(),
  weight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  percentOfWeight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  neutered: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const EnumSpeciesFilterSchema: z.ZodType<Prisma.EnumSpeciesFilter> = z.object({
  equals: z.lazy(() => SpeciesSchema).optional(),
  in: z.lazy(() => SpeciesSchema).array().optional(),
  notIn: z.lazy(() => SpeciesSchema).array().optional(),
  not: z.union([ z.lazy(() => SpeciesSchema),z.lazy(() => NestedEnumSpeciesFilterSchema) ]).optional(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BoolNullableFilterSchema: z.ZodType<Prisma.BoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const PetCountOrderByAggregateInputSchema: z.ZodType<Prisma.PetCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  petName: z.lazy(() => SortOrderSchema).optional(),
  species: z.lazy(() => SortOrderSchema).optional(),
  weight: z.lazy(() => SortOrderSchema).optional(),
  percentOfWeight: z.lazy(() => SortOrderSchema).optional(),
  breed: z.lazy(() => SortOrderSchema).optional(),
  birthdate: z.lazy(() => SortOrderSchema).optional(),
  neutered: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PetAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PetAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  weight: z.lazy(() => SortOrderSchema).optional(),
  percentOfWeight: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PetMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PetMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  petName: z.lazy(() => SortOrderSchema).optional(),
  species: z.lazy(() => SortOrderSchema).optional(),
  weight: z.lazy(() => SortOrderSchema).optional(),
  percentOfWeight: z.lazy(() => SortOrderSchema).optional(),
  breed: z.lazy(() => SortOrderSchema).optional(),
  birthdate: z.lazy(() => SortOrderSchema).optional(),
  neutered: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PetMinOrderByAggregateInputSchema: z.ZodType<Prisma.PetMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  petName: z.lazy(() => SortOrderSchema).optional(),
  species: z.lazy(() => SortOrderSchema).optional(),
  weight: z.lazy(() => SortOrderSchema).optional(),
  percentOfWeight: z.lazy(() => SortOrderSchema).optional(),
  breed: z.lazy(() => SortOrderSchema).optional(),
  birthdate: z.lazy(() => SortOrderSchema).optional(),
  neutered: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PetSumOrderByAggregateInputSchema: z.ZodType<Prisma.PetSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  weight: z.lazy(() => SortOrderSchema).optional(),
  percentOfWeight: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const EnumSpeciesWithAggregatesFilterSchema: z.ZodType<Prisma.EnumSpeciesWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SpeciesSchema).optional(),
  in: z.lazy(() => SpeciesSchema).array().optional(),
  notIn: z.lazy(() => SpeciesSchema).array().optional(),
  not: z.union([ z.lazy(() => SpeciesSchema),z.lazy(() => NestedEnumSpeciesWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSpeciesFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSpeciesFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const EnumSpeciesFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSpeciesFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => SpeciesSchema).optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedEnumSpeciesFilterSchema: z.ZodType<Prisma.NestedEnumSpeciesFilter> = z.object({
  equals: z.lazy(() => SpeciesSchema).optional(),
  in: z.lazy(() => SpeciesSchema).array().optional(),
  notIn: z.lazy(() => SpeciesSchema).array().optional(),
  not: z.union([ z.lazy(() => SpeciesSchema),z.lazy(() => NestedEnumSpeciesFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolNullableFilterSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedEnumSpeciesWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumSpeciesWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SpeciesSchema).optional(),
  in: z.lazy(() => SpeciesSchema).array().optional(),
  notIn: z.lazy(() => SpeciesSchema).array().optional(),
  not: z.union([ z.lazy(() => SpeciesSchema),z.lazy(() => NestedEnumSpeciesWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSpeciesFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSpeciesFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const PetFindFirstArgsSchema: z.ZodType<Prisma.PetFindFirstArgs> = z.object({
  select: PetSelectSchema.optional(),
  where: PetWhereInputSchema.optional(),
  orderBy: z.union([ PetOrderByWithRelationInputSchema.array(),PetOrderByWithRelationInputSchema ]).optional(),
  cursor: PetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PetScalarFieldEnumSchema,PetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PetFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PetFindFirstOrThrowArgs> = z.object({
  select: PetSelectSchema.optional(),
  where: PetWhereInputSchema.optional(),
  orderBy: z.union([ PetOrderByWithRelationInputSchema.array(),PetOrderByWithRelationInputSchema ]).optional(),
  cursor: PetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PetScalarFieldEnumSchema,PetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PetFindManyArgsSchema: z.ZodType<Prisma.PetFindManyArgs> = z.object({
  select: PetSelectSchema.optional(),
  where: PetWhereInputSchema.optional(),
  orderBy: z.union([ PetOrderByWithRelationInputSchema.array(),PetOrderByWithRelationInputSchema ]).optional(),
  cursor: PetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PetScalarFieldEnumSchema,PetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PetAggregateArgsSchema: z.ZodType<Prisma.PetAggregateArgs> = z.object({
  where: PetWhereInputSchema.optional(),
  orderBy: z.union([ PetOrderByWithRelationInputSchema.array(),PetOrderByWithRelationInputSchema ]).optional(),
  cursor: PetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PetGroupByArgsSchema: z.ZodType<Prisma.PetGroupByArgs> = z.object({
  where: PetWhereInputSchema.optional(),
  orderBy: z.union([ PetOrderByWithAggregationInputSchema.array(),PetOrderByWithAggregationInputSchema ]).optional(),
  by: PetScalarFieldEnumSchema.array(),
  having: PetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PetFindUniqueArgsSchema: z.ZodType<Prisma.PetFindUniqueArgs> = z.object({
  select: PetSelectSchema.optional(),
  where: PetWhereUniqueInputSchema,
}).strict() ;

export const PetFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PetFindUniqueOrThrowArgs> = z.object({
  select: PetSelectSchema.optional(),
  where: PetWhereUniqueInputSchema,
}).strict() ;

export const PetCreateArgsSchema: z.ZodType<Prisma.PetCreateArgs> = z.object({
  select: PetSelectSchema.optional(),
  data: z.union([ PetCreateInputSchema,PetUncheckedCreateInputSchema ]),
}).strict() ;

export const PetUpsertArgsSchema: z.ZodType<Prisma.PetUpsertArgs> = z.object({
  select: PetSelectSchema.optional(),
  where: PetWhereUniqueInputSchema,
  create: z.union([ PetCreateInputSchema,PetUncheckedCreateInputSchema ]),
  update: z.union([ PetUpdateInputSchema,PetUncheckedUpdateInputSchema ]),
}).strict() ;

export const PetCreateManyArgsSchema: z.ZodType<Prisma.PetCreateManyArgs> = z.object({
  data: z.union([ PetCreateManyInputSchema,PetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PetCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PetCreateManyAndReturnArgs> = z.object({
  data: z.union([ PetCreateManyInputSchema,PetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PetDeleteArgsSchema: z.ZodType<Prisma.PetDeleteArgs> = z.object({
  select: PetSelectSchema.optional(),
  where: PetWhereUniqueInputSchema,
}).strict() ;

export const PetUpdateArgsSchema: z.ZodType<Prisma.PetUpdateArgs> = z.object({
  select: PetSelectSchema.optional(),
  data: z.union([ PetUpdateInputSchema,PetUncheckedUpdateInputSchema ]),
  where: PetWhereUniqueInputSchema,
}).strict() ;

export const PetUpdateManyArgsSchema: z.ZodType<Prisma.PetUpdateManyArgs> = z.object({
  data: z.union([ PetUpdateManyMutationInputSchema,PetUncheckedUpdateManyInputSchema ]),
  where: PetWhereInputSchema.optional(),
}).strict() ;

export const PetDeleteManyArgsSchema: z.ZodType<Prisma.PetDeleteManyArgs> = z.object({
  where: PetWhereInputSchema.optional(),
}).strict() ;