import { expect } from 'chai';
import request from 'supertest';
import 'dotenv/config';
//const {obterToken} = require('../helpers/autenticacao')
import { obterToken } from '../helpers/autenticacao.js';
import postTransferencias from '../fixtures/postTransferencias.json' with {type : 'json'}


describe('Transferências', () =>{
    describe('POST /transferencias', () => {
        let token;

        beforeEach(async() => { //Roda antes de cada teste para obter um token válido
            token = await obterToken('julio.lima','123456')
        })

        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async() => {
            const bodyTransferencias = {...postTransferencias}

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`) //Header para enviar o token de autenticação
                .send(bodyTransferencias) //shallowcopy 
            expect(response.status).to.equal(201);
        })

        it('Deve retornar sucesso com 422 quando o valor da transferência for abaixo de R$ 10,00', async() => {
            const bodyTransferencias = {...postTransferencias}
            bodyTransferencias.valor = 9.99

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`) //Header para enviar o token de autenticação
                .send(bodyTransferencias)
            expect(response.status).to.equal(422);
        })
    })
});

