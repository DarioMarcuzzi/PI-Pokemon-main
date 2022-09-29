const { DataTypes, } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp:{
      type: DataTypes.INTEGER,
    },
    attack:{
      type: DataTypes.INTEGER,
    },
    defense:{
      type: DataTypes.INTEGER,
    },
    speed:{
      type: DataTypes.INTEGER,
    },
    height:{
      type: DataTypes.INTEGER,
    },
    weight:{
      type: DataTypes.INTEGER,
    },
    image:{
      type: DataTypes.STRING(5000),

      allowNull: false,
    },
    createdInDb: { 
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true,
    }


  });
};
