import * as chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp)

describe('Testa a camada de Controller', () => {
  describe('Teste o método addCar "cars.controller.ts', () => {
    it('Deve retornar status 201', () => {
      const request = chai.request('app')
        .post('/cars')
        .send({
          model: "Tesla", 
          year: 2021, 
          color: 'gray', 
          buyValue: 380000, 
          doorsQty: 4, 
          seatsQty: 4
        })

        expect(request).toHaveProperty('status');
    })
  });
});