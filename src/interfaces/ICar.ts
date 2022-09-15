import { z } from 'zod';
import { IVehicle } from './IVehicle';

const ICarSchema = z.object({
  doorsQty: z.number().int().gte(2).lte(4),
  seatsQty: z.number().int().gte(2).lte(7),
});

export type ICar = IVehicle & z.infer<typeof ICarSchema>;