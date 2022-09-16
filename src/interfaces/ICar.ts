import { z } from 'zod';
import { IVehicleSchema } from './IVehicle';

const ICarSchema = IVehicleSchema.extend({
  doorsQty: z
    .number()
    .gte(2)
    .lte(4),
  seatsQty: z
    .number()
    .gte(2)
    .lte(7),
});

export type ICar = z.infer<typeof ICarSchema>;

export { ICarSchema };