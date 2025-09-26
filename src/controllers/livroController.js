import livro from "../model/livro"; 
import express from "express";

class LivroController {
    static async listarLivros (req, res) {
        const listaLivros = await livro.find();
        res.status(200).json(listaLivros);
    }

};

export default LivroController;
