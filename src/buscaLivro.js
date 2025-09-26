function buscarLivroPorId(id, livros) {
  return livros.find(livro => livro.id === Number(id));
}

export { buscarLivroPorId };
