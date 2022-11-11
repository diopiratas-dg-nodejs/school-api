const db = require('../database/models')
const Aluno = db.Aluno;

const alunoController = {
    list: (req, res) => {
        Aluno.findAll()
            .then(alunos => {
                res.status(200).json(alunos)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    findById: (req, res) => {
        Aluno.findByPk(req.params.id)
            .then(alunos => {
                res.status(200).json(alunos)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    find: (req, res) => {
        Aluno.findAll({
            where: 
            {               
                nome: {[db.Sequelize.Op.like] : `%${req.params.termo}%`}
            },
            order: [
                ['nome','asc']
            ]
        })
            .then(alunos => {
                res.status(200).json(alunos)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    ordenedEntry: (req, res) => {
        Aluno.findAll({           
            order: [
                ['anoMatricula','desc']
            ],
            limit: 10
        })
            .then(alunos => {
                res.status(200).json(alunos)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = alunoController;