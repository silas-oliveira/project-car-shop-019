import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class CarsService implements IService<ICar> {
  constructor(private carsModel: IModel<ICar>) { }

  addCar(body: ICar) {
    const result = this.carsModel.create(body);
    return result;
  }
}

export default CarsService;