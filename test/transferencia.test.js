import { expect } from 'chai';
import request from 'supertest';
import 'dotenv/config';
//const {obterToken} = require('../helpers/autenticacao')
import { obterToken } from '../helpers/autenticacao.js';
import postTransferencias from '../fixtures/postTransferencias.json' with {type : 'json'}


describe('Transferências', () =>{
    let token;

    beforeEach(async() => { //Roda antes de cada teste para obter um token válido
        token = await obterToken('julio.lima','123456')
    })

    describe('POST /transferencias', () => {
        

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

    describe('POST /transferencias/{id}', () => {
        it('Deve retornar sucesso com 200 e dados iguais ao registro de transferências contido no banco de dados quando o ID for valido.', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/7')
                .set('Authorization', `Bearer ${token}`)
            
            expect(resposta.status).to.equal(200)
            expect(resposta.body.id).to.equal(7)
            expect(resposta.body.id).to.be.a('number')  //validar tipagem do valor
            expect(resposta.body.conta_origem_id).to.equal(1)
            expect(resposta.body.conta_destino_id).to.equal(2)
            expect(resposta.body.valor).to.equal(11.00)

        })
    })

    describe('Get /transferencias', () => {
        it('Deve retornar 10 elementos na paginacao quando informar limite de 10 registros', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization', `Bearer ${token}`)
            
            expect(resposta.status).to.equal(200)
            expect(resposta.body.limit).to.equal(10)
            expect(resposta.body.transferencias).to.have.lengthOf(10)
        })
    })
});

