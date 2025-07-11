'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    let etiquetas = ['foto','payaso','rojo','azul','techo','cielo','foco','luz']
    for(let etiqueta of etiquetas) {
      await queryInterface.bulkInsert('etiquetas', [{
        texto: etiqueta,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
