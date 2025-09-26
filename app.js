import express from 'express';
const app = express();

const livros = [
    {
        id: 1,
        titulo: "Senhor dos Aneis",
        autor: "J.R.R Tolkien"
    },
    {
        id: 2,
        titulo: "Harry Potter",
        autor: "J.K Rowling"
    }
]

app.get('/', (req, res)=>{ //passando para o express a responsabilidade de gerenciar rotas
    res.status(200).send("Curso de Node.js");
})
app.get('/livros', (req, res)=>{
    res.status(200).json(livros); //.send() para texto e .json() para objetos
})

app.get('/autores', (req, res)=>{
    res.status(200).send("entrei na rota de autores");
})

export default app;