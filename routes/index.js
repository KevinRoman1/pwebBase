var express = require('express');
var router = express.Router();

const Foto = require('../models').foto;

/* GET home page. */
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

module.exports = router;
