var express = require('express');
var router = express.Router();
module.exports = router;

const Sequelize = require('sequelize');
const  Foto  = require('../models').foto;

router.get('/findAll/json', function (req, res, next) {
  Foto.findAll({
    attributes: {exclude: ['updatedAt']},
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