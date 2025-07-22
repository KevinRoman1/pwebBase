var express = require('express');
var router = express.Router();
module.exports = router;

const Sequelize = require('sequelize');
const  Foto  = require('../models').foto;
const Etiqueta = require('../models').etiqueta;
router.get('/findAll/json', function (req, res, next) {
  Foto.findAll({
    attributes: {exclude: ['updatedAt']},
    include: [{
      model: Etiqueta,
      attributes: ['texto'],
      through: { attributes: [] } // Exclude the join table attributes
    }]
  })
  .then(fotos => {
    res.json(fotos);
  })
  .catch(error => {
    res.status(500).send('Error al obtener las fotos');
  });
});

router.get('/findAll/view', function (req, res, next) {
  Foto.findAll({
    attributes: {exclude: ['updatedAt']},
  })
  .then(fotos => {
    res.render('fotos', {title: 'Fotos', arrFotos: fotos});
  })
  .catch(error => {
    res.status(500).send('Error al obtener las fotos');
  });
});

router.get('/', async function(req, res, next) {
  try {
    const fotos = await Foto.findAll({
      attributes: { exclude: ['updatedAt'] }
    });
    res.render('index', { title: 'Inicio', arrFotos: fotos });
  } catch (error) {
    res.status(500).send('Error al obtener las fotos');
  }
});



router.get('/findById/:id', function (req, res, next) {
  Foto.findByPk(req.params.id, {
    attributes: { exclude: ['updatedAt'] },
    include: [{
      model: Etiqueta,
      attributes: ['texto'],
      through: { attributes: [] }
    }]
  })
  .then(foto => {
    if (!foto) {
      return res.status(404).json({ error: 'Foto no encontrada' });
    }
    res.json(foto);
  })
  .catch(error => {
    res.status(500).send('Error al obtener la foto');
  });
});

router.get('/foto/:id', function(req, res) {
  res.render('foto'); 
});