'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    let [fotos] = await queryInterface.sequelize.query('SELECT id FROM fotos');
    let [etiquetas] = await queryInterface.sequelize.query('SELECT id FROM etiquetas');

    let fotoetiquetas = [];
    for (let foto of fotos) {
      for (let etiqueta of etiquetas) {
        fotoetiquetas.push({
          foto_id: foto.id,
          etiqueta_id: etiqueta.id,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }

    await queryInterface.bulkInsert('fotoetiquetas', fotoetiquetas, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fotoetiquetas', null, {});
  }
};
