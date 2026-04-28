import { expect } from "chai";
import request from "supertest";
import { describe } from "mocha";


describe('Login2', () => {
    describe('POST /login', () => {
        it('Retorna 200 e o token em string quando utilizado credenciais válidas', async () => {
            const response =  await request('http://localhost:3000')
                .post('/login')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })
            
            expect(response.status).to.equal(200);
            expect(response.body.token).to.be.a('string');

        })
    })
})