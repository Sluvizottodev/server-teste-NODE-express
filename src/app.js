import express from 'express';
import { buscarLivroPorId } from './buscaLivro.js';
import conectaDatabase from './config/dbConnect.js';

const app = express();
app.use(express.json()); // middleware para interpretar json

//conexao BD
const con = await conectaDatabase();

con.on("error", (erro) => {
  console.log("Erro na conexão com o banco de dados", erro);
});

con.once("open",()=>{
  console.log("Conexão com o banco de dados realizada com sucesso");
})



let livros = [
  { id: 1, titulo: "Senhor dos Aneis", autor: "J.R.R Tolkien" },
  { id: 2, titulo: "Harry Potter", autor: "J.K Rowling" }
];

app.get('/', (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
  const livro = buscarLivroPorId(req.params.id, livros);

  if (!livro) {
    return res.status(404).json({ mensagem: "Livro não encontrado" });
  }
  res.status(200).json(livro);
});

app.get('/autores', (req, res) => {
  res.status(200).send("entrei na rota de autores");
});

app.post('/livros', (req, res) => {
  const novoLivro = {
    id: livros.length + 1,
    titulo: req.body.titulo,
    autor: req.body.autor
  };

  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

app.put('/livros/:id', (req, res) => {
  const livro = buscarLivroPorId(req.params.id, livros);

  if (!livro) {
    return res.status(404).json({ mensagem: "Livro não encontrado" });
  }

  livro.titulo = req.body.titulo || livro.titulo;
  livro.autor = req.body.autor || livro.autor;

  res.status(200).json(livro);
});

app.delete('/livros/:id', (req, res) => {
    const index = buscarLivroPorId(req.params.id, livros);
    if (index === -1) {
        return res.status(404).json({ mensagem: "Livro não encontrado" });
    }
    livros.splice(index, 1);// metodo que remove elementos do array
    res.status(204).send();
});

export default app;

//mongodb+srv://admin:<db_password>@cluster0.luhznay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


// TODA REQUISIÇÃO TEM QUE TER UMA RESPOSTA. SEGUE ALGUMAS:
/*
200 - OK - requisição bem sucedida
201 - Created - requisição bem sucedida
204 - No Content - requisição bem sucedida sem corpo de resposta
400 - Bad Request - requisição inválida
401 - Unauthorized - não autorizado
403 - Forbidden - proibido
404 - Not Found - não encontrado
500 - Internal Server Error - erro interno do servidor
*/