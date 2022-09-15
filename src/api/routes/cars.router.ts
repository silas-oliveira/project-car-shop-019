import { Router } from 'express';
import CarsController from '../../controllers/cars.controller';
import CarsModel from '../../models/cars.model';
import CarsService from '../../services/cars.service';

const carsRouter = Router();

const carsModel = new CarsModel();
const carsService = new CarsService(carsModel);
const carsController = new CarsController(carsService);

carsRouter.post('/', async (req, res) => {
  const result = await carsController.addCar(req.body);
  return res.status(201).json(result);
});

export default carsRouter;