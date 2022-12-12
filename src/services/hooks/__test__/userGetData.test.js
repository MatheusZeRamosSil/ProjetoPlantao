import { useGetData } from '../useGetData'

var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

var axiosMock = new MockAdapter(axios);


it('get mock data', async () => {
                    
    var mockInterno = {
        "id": 2,
        "nome": "Matheus ",
        "email": "matheuszeramossilva2000@gmail.com",
        "rgm": "26581337",
        "telefone": "87999690335",
        "graduacao": "Fisioterapia",
        "periodoInterno": "P12",
        "equipe": null
    }

    axiosMock.onGet().reply(200,mockInterno)
    const resultJson =  await useGetData().getUser(26581337)
    expect(resultJson).toEqual(mockInterno);
});

it('create a new user', async () => {
    var responseMock = {
        id:5
    };

    var newUserFake ={
       
        email: "interno7@gmail.com",
        graduacao: 1,
        nome: "Interno7",
        periodoInterno: 2,
        rgm: "12345777",
        senha: "interno7",
        telefone: "83 111111111",   
    };

    axiosMock.onPost().reply(201, newUserFake)
    const resultJson = await useGetData().createNewUser(newUserFake)
    expect(resultJson).toEqual(201)

});

it('update data user', async () => {
   

    var fakeUpdateUser ={
        nome: "Inet teste",
        email: "interno4@gmail.com",
        rgm: "44444444",
        telefone: "83 121212121",
        graduacao: "0",
        periodoInterno: "3",
        senha: "interno4"
    };

    axiosMock.onPut().reply(200,fakeUpdateUser)
    const result = await useGetData().updateUserData(44444444,fakeUpdateUser)
    expect(result).toEqual(200)
});

