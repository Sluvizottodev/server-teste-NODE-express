import mongoose from "mongoose";

// objeto de configuração q define a estrutura e as propr de um doc
const livroSchema = new mongoose.Schema({
    "id": { type: Number },
    "titulo": { type: String, required: true },
    "autor": { type: String, required: true },
    "editora": { type: String, required: true },
    "preco": { type: Number, required: true },
    "paginas": { type: Number, required: true }
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema, "livros"); 

export default livro;