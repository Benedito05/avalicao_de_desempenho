
import express from "express";




const app = express();


// GET = buscar uma informacao


// POST = inserir uma  informacao no BD ou aplicacao


// PUT = alterar uma informacao 

// DELETE = Remover um Dado

// Patch = Alterar uma informacao especifica

app.get("/test", (request, response) => {

    // REQUEST= Toda informacao que entra  apartir do cliente para aplicacao ou api

    // RESPONSE = Toda informacao que sai da aplicacao para o cliente


    return response.send("olá mundo..... ");
});

app.post("/teste", (request, response) => {

    return response.send("enviouuuu");

})

app.listen(3000, () => console.log("servidor rodando..."));

