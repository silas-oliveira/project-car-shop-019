import { Schema, model as mongooseCreateModel } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './mongo.model';

const ICarMongooseSchema = new Schema<ICar>({
  status: Boolean,
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
});

class CarsModel extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Cars', ICarMongooseSchema)) {
    super(model);
  }
}

export default CarsModel;