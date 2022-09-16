import * as chai from 'chai';
import chaiHttp from 'chai-http';
import Sinon from 'sinon';
import CarsController from '../../../controllers/cars.controller';
import CarsModel from '../../../models/cars.model';
import CarsService from '../../../services/cars.service';
import { bodyCarMock, bodyRequestCarMock } from '../mocks/carsMock';
const { expect } = chai;

chai.use(chaiHttp)

describe('Testa a camada de Controller', () => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel);
  const carsController = new CarsController(carsService);

  describe('Teste o método addCar "cars.controller.ts', () => {
    before(() => {
      Sinon.stub(carsController, 'addCar').resolves(bodyRequestCarMock);
    })
    after(() => {
      Sinon.restore();
    })
    it('Deve retornar o body', async () => {
      const addCar = await carsController.addCar(bodyCarMock);
      expect(addCar).to.be.deep.equal(bodyRequestCarMock)
    })
  });
});