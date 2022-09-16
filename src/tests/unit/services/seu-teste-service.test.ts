import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/cars.model';
import CarsService from '../../../services/cars.service';
import { bodyRequestCarMock } from '../mocks/carsMock';
const { expect } = chai;

describe('Testa a camada de Service', () => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel);

  describe('Teste o método addCar "cars.service.ts', () => {
    before(async () => {
      sinon
        .stub(carsService, 'addCar')
        .resolves(bodyRequestCarMock);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('Deve retornar o body', async () => {
      const addCar = await carsService.addCar(bodyRequestCarMock); 
      expect(addCar).to.be.deep.equal(bodyRequestCarMock)
    });
  });
});