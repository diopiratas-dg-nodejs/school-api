const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define(
    "Aluno",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        anoMatricula: DataTypes.INTEGER
    },
    {
        tableName: 'alunos',
        timestamps: false,
        underscored: true
    }
    );

    Aluno.associate = function(modelos){
        Aluno.belongsToMany(modelos.Turma,{
            as: "turma",
            through: "alunos_has_turmas",
            foreignKey: "aluno_id",
            otherKey: "turma_id",
            timestamps: false
        })
    }

    return Aluno;
};