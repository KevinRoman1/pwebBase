'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class foto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.foto.belongsToMany(models.etiqueta, {
        through: 'fotoetiquetas',
        foreignKey: 'foto_id',
      });
    }
  }
  foto.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    calificacion: DataTypes.FLOAT,
    ruta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'foto',
  });
  return foto;
};