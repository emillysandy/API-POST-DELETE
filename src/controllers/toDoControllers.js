const contatosJson = require("../models/contatos.json");

const getAll = (request, response) => {
    response.status(200).send(contatosJson)
}

const getById = (request, response) => {
    const idRequirido = request.params.id
    const contatoFiltrado = contatosJson.find(contato => contato.id == idRequirido)

    response.status(200).send(contatoFiltrado)
}
//Será possível pegar do cliente descrição e nome 
const criarContato = (request, response) => {

     const nomeContato = request.body.nome
     const numeroContato = request.body.celular
     const redesContato = request.body.redesSociais

     const novoContato = {
        id: "4",
        nome: nomeContato,
        celular: numeroContato,
        redesSociais: redesContato
    };

    contatosJson.push(novoContato);
    response.status(200).send(novoContato);
}
const apagarContato = (request, response) => {
    const idRequirido = request.params.id;
    const contatoFiltrado = contatosJson.find(contato => contato.id == idRequirido);

    const indice = contatosJson.indexOf(contatoFiltrado)
    contatosJson.splice(indice, 1);

    response.status(200).send(
        [
            {
                "mensagem": "Contatinho deletado com sucesso"

            },
            contatosJson
        ]
    )
}

module.exports = { getAll, getById, criarContato, apagarContato}