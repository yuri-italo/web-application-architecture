const Marker = require('../models/Marker');

exports.create = async (req, res) => {
  try {
    const newMarker = new Marker(req.body);
    const savedMarker = await newMarker.save();
    res.status(201).json(savedMarker);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o marker' });
  }
};

exports.getById = async (req, res) => {
    try {
        const marker = await Marker.findById(req.params.id);
        if (!marker) {
          return res.status(404).json({ error: 'Marker não encontrado' });
        }
        res.status(200).json(marker);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao encontrar o marker' });
      }
};

exports.getAll = async (req, res) => {
    try {
        const markers = await Marker.find();
        res.status(200).json(markers);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao listar os markers' });
      }
};

exports.update = async (req, res) => {
    try {
      const updatedMarker = await Marker.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updatedMarker) {
        return res.status(404).json({ error: 'Marker não encontrado' });
      }
      res.status(200).json(updatedMarker);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o marker' });
    }
};
  
exports.delete = async (req, res) => {
    try {
      const deletedMarker = await Marker.findByIdAndRemove(req.params.id);
      if (!deletedMarker) {
        return res.status(404).json({ error: 'Marker não encontrado' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir o marker' });
    }
};