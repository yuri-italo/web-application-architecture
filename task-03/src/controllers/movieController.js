const Movie = require("../models/Movie");

module.exports = {
  async createMovie(req, res) {
    try {
      const { titulo, sinopse, duracao, imagem, dataLancamento } = req.body;
      const movie = await Movie.create({
        titulo,
        sinopse,
        duracao,
        imagem,
        dataLancamento,
      });
      res.status(201).json(movie);
    } catch (error) {
      res.status(500).json({ error: "Não foi possível criar o filme." });
    }
  },

  async getAllMovies(req, res) {
    try {
      const movies = await Movie.findAll();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ error: "Não foi possível buscar os filmes." });
    }
  },

  async getMovie(req, res) {
    try {
      const { id } = req.params;
      const movie = await Movie.findByPk(id);
      if (!movie) {
        return res.status(404).json({ error: "Filme não encontrado." });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: "Não foi possível buscar o filme." });
    }
  },

  async updateMovie(req, res) {
    try {
      const { id } = req.params;
      const { titulo, sinopse, duracao, imagem, dataLancamento } = req.body;
      const movie = await Movie.findByPk(id);
      if (!movie) {
        return res.status(404).json({ error: "Filme não encontrado." });
      }
      await movie.update({ titulo, sinopse, duracao, imagem, dataLancamento });
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: "Não foi possível atualizar o filme." });
    }
  },

  async deleteMovie(req, res) {
    try {
      const { id } = req.params;
      const movie = await Movie.findByPk(id);
      if (!movie) {
        return res.status(404).json({ error: "Filme não encontrado." });
      }
      await movie.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Não foi possível excluir o filme." });
    }
  },
};
