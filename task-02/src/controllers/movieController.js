const Movie = require('../models/Movie');

// Função para criar um novo filme
exports.create = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o filme' });
  }
};

// Função para listar filme por id
exports.getById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
          return res.status(404).json({ error: 'Filme não encontrado' });
        }
        res.status(200).json(movie);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao encontrar o filme' });
      }
};

// Função para listar todos os filmes
exports.getAll = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao listar os filmes' });
      }
};

// Função para atualizar um filme
exports.update = async (req, res) => {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updatedMovie) {
        return res.status(404).json({ error: 'Filme não encontrado' });
      }
      res.status(200).json(updatedMovie);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o filme' });
    }
};
  

// Função para excluir um filme
exports.delete = async (req, res) => {
    try {
      const deletedMovie = await Movie.findByIdAndRemove(req.params.id);
      if (!deletedMovie) {
        return res.status(404).json({ error: 'Filme não encontrado' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir o filme' });
    }
};
