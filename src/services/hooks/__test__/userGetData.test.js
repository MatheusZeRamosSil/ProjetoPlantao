import { useGetData } from '../useGetData'

var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

var axiosMock = new MockAdapter(axios);


it('get mock data', async () => {

    var dataUsers = {id: 1, 
                    nome: "Teresa de Calcutá",
                    email:"calcuta@gmail.com",
                    rgm: 123456,
                    telefone: "8399995555",
                    dataNascimento:"1970-01-01T06:23:41.980+00:00",
                    senha:"321654",
                    preceptor:null,
                    cpf:"12345678900"};

    axiosMock.onGet().reply(200,dataUsers)
    const resultJson =  await useGetData().getUser(1)
    expect(resultJson).toEqual(dataUsers);
});

it('create a new user', async () => {
    var responseMock = {
        id:5
    };

    var newUserFake = {
        "nome":"Marcos",
        "email":"test@test2.com",
        "rgm":6455467,
        "telefone":"8799999911",
        "dataNascimento":"2000-07-05",
        "senha":"345690",
        "preceptor":null,
        "cpf":"99999999"
    };

    axiosMock.onPost().reply(200, responseMock)
    const resultJson = await useGetData().createNewUser(7,newUserFake)
    expect(resultJson).toEqual(201)

});

it('update data user', async () => {
    var mockedUser = {
        nome:"Teste"
    }

    var fakeUpdateUser = {
        "nome":"Agostinho Hipona",
        "email":"agostinho@hipona.com",
        "rgm":6455467,
        "telefone":"8799999912",
        "dataNascimento":"1354-07-05",
        "senha":"345690",
        "preceptor":null,
        "cpf":"99999999"
    }

    axiosMock.onPut().reply(204,mockedUser)
    const result = await useGetData().updateUserData(3,fakeUpdateUser)
    expect(result).toEqual(200)
});

