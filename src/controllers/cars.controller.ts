import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

class CarsController {
  constructor(private carsService: IService<ICar>) { }

  addCar(body: ICar) {
    const result = this.carsService.addCar(body);
    return result;
  }
}

export default CarsController;