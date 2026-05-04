import request from 'supertest';
//const postLogin = require('../fixture/postLogin.json');
import postLogin from '../fixtures/postLogin.json' with {type: 'json'};

export const obterToken = async (usuario,senha) =>{
    const bodyLogin = {...postLogin}
    
    const responseLogin =  await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(bodyLogin)

    return responseLogin.body.token;
}

