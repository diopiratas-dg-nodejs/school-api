const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Turma = sequelize.define(
    "Turma",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        duracao: DataTypes.INTEGER,
        anoInicio: DataTypes.INTEGER,
        semestre: DataTypes.INTEGER        
    },
    {
        tableName: 'turmas',
        timestamps: false,
        underscored: true
    }
    );

    Turma.associate = function(modelos){
        Turma.belongsToMany(modelos.Aluno,{
            as: "aluno",
            through: "alunos_has_turmas",
            foreignKey: "turma_id",
            otherKey: "aluno_id",
            timestamps: false
        }),
        Turma.belongsTo(modelos.Curso,{
            as: "curso",
            foreignKey: "curso_id"
        })
    }

    return Turma;
};