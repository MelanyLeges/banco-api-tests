import { expect } from 'chai';
import request from 'supertest';

describe('Transferências', () =>{
    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async() => {
            //Capturar o Token
            const responseLogin =  await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            const token = responseLogin.body.token;
            
            const response = await request('http://localhost:3000')
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
            const responseLogin =  await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            const token = responseLogin.body.token;
            
            const response = await request('http://localhost:3000')
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

