import * as chai from 'chai';
import chaiHttp from 'chai-http';
import Sinon from 'sinon';
import CarsController from '../../../controllers/cars.controller';
import CarsModel from '../../../models/cars.model';
import CarsService from '../../../services/cars.service';
import { bodyCarMock, bodyRequestCarMock, getAllMock } from '../mocks/carsMock';
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

  describe('Teste o método getAll "cars.controller.ts', () => {
    it('Deve retornar o body', async () => {
      Sinon.stub(carsController, 'getAll').resolves(getAllMock);
      const getAll = await carsController.getAll();
      expect(getAll).to.be.deep.equal(getAllMock)
      Sinon.restore();
    })
  });
});