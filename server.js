import app from './app.js';
const PORT = 3000;

const rotas = {
    "/": "Curso de Node.js", // '/' diz sobre a rota base
    "/livros": "entrei na rota de livros",
    "/autores": "entrei na rota de autores"
};

// const server =  http.createServer((req, res)=>{
//     //cabeçalho
//     res.writeHeader(200, {'Content-Type': 'text/plain'});
//     res.end(rotas[req.url] || "Rota não encontrada"); 
// });

app.listen(PORT, ()=>{ //abre escuta da porta
    console.log(`Servidor rodando na porta ${PORT}`);
});