import express from 'express';
import 'express-async-errors';
import errorHandler from './api/middlewares/error.handler.middleware';
import carsRouter from './api/routes/cars.router';

const app = express();

app.use(express.json());
app.use('/cars', carsRouter);
app.use(errorHandler);

export default app;
