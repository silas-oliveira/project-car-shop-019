import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/cars.model';
import { bodyCarMock, bodyRequestCarMock, getAllMock } from '../mocks/carsMock';
import { Model } from 'mongoose';
const { expect } = chai;

describe('Testa a camada de Model', () => {
  const carsModel = new CarsModel();

  describe('Teste o método addCar "cars.model.ts', () => {
    before(async () => {
      sinon
        .stub(Model, 'create')
        .resolves(bodyCarMock);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('Deve retornar o body', async () => {
      const addCar = await carsModel.create(bodyRequestCarMock); 
      expect(addCar).to.be.deep.equal(bodyCarMock)
    });
  });

  describe('Teste o método getAll "cars.model.ts', () => {
    it('Deve retornar o body', async () => {
      sinon
      .stub(Model, 'find')
      .resolves(getAllMock);
      const getAll = await carsModel.read(); 
      expect(getAll).to.be.deep.equal(getAllMock)
      sinon.restore();
    });
  });
});