const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define(
    "Curso",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        nome: DataTypes.STRING       
    },
    {
        tableName: 'cursos',
        timestamps: false,
        underscored: true
    }
    );

    Curso.associate = function(modelos){
        Curso.hasMany(modelos.Turma,{
            as: "turma",            
            foreignKey: "curso_id"
        })
    }

    return Curso;
};