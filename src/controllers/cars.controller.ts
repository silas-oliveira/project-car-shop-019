import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

class CarsController {
  constructor(private carsService: IService<ICar>) { }

  addCar(body: ICar) {
    const result = this.carsService.addCar(body);
    return result;
  }

  getAll() {
    const result = this.carsService.getAll();
    return result;
  }
}

export default CarsController;