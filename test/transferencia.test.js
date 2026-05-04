import { expect } from 'chai';
import request from 'supertest';
import 'dotenv/config';
//const {obterToken} = require('../helpers/autenticacao')
import { obterToken } from '../helpers/autenticacao.js';


describe('Transferências', () =>{
    describe('POST /transferencias', () => {
        let token;

        beforeEach(async() => { //Roda antes de cada teste para obter um token válido
            token = await obterToken('julio.lima','123456')
        })

        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async() => {
            
            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`) //Header para enviar o token de autenticação
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11.00,
                    token: ""
                })
            expect(response.status).to.equal(201);
        })

        it('Deve retornar sucesso com 422 quando o valor da transferência for abaixo de R$ 10,00', async() => {

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`) //Header para enviar o token de autenticação
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 9.99,
                    token: ""
                })
            expect(response.status).to.equal(422);
        })
    })
});

