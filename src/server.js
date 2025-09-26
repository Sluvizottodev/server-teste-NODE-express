import app from './app.js';
import "dotenv/config.js";

const rotas = {
    "/": "Curso de Node.js", // '/' diz sobre a rota base
    "/livros": "entrei na rota de livros",
    "/autores": "entrei na rota de autores"
};

app.listen(PORT, ()=>{ //abre escuta da porta
    console.log(`Servidor rodando na porta ${PORT}`);
});