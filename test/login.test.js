import { describe } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import 'dotenv/config';
import postLogin from '../fixtures/postLogin.json' with {type : 'json'}

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com um token em string quando usar credenciais válidas', async () =>{ //Como a requisição é assíncrona, usamos async/await para lidar com a resposta
            const bodyLogin = {...postLogin}
            
            const response =  await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json') //Header para indicar que o corpo da requisição é JSON
                .send(bodyLogin)
            
            expect(response.status).to.equal(200);
            expect(response.body.token).to.be.a('string');
        })
    })
})