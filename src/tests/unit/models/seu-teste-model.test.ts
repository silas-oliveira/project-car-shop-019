import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/cars.model';
import { bodyCarMock, bodyRequestCarMock } from '../mocks/carsMock';
import { Model } from 'mongoose';
const { expect } = chai;

describe('Testa a camada de Model', () => {
  const carsModel = new CarsModel();

  describe('Teste o método addCar "cars.service.ts', () => {
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
});