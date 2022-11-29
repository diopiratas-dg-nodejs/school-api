const db = require('../database/models')
const Aluno = db.Aluno;

const alunoController = {
    list: (req, res) => {
        Aluno.findAll({
            attributes: {exclude: ['alunos_has_turmas']},
            include: [
                {model: db.Turma, as: 'turma'}
            ]
        })
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
    },

    create: async (req, res) => {
      const aluno = req.body
      try {
        await Aluno.create(aluno)
        res.status(201).json({ msg: 'Aluno criado com sucesso!' })
      } catch (err) {
        res.status(400).json({ error: [...err] })
      }
    },

    update: async (req, res) => {
      const id = req.params.id
      const aluno = req.body
      try {
        await Aluno.update(aluno, { where: { id } })
        res.status(201).json({ msg: 'Aluno alterado com sucesso!' })
      } catch (err) {
        res.status(400).json({ error: [...err] })
      }
    },

    delete: async (req, res) => {
      const id = req.params.id
      try {
        await Aluno.destroy({ where: { id } })
        res.status(200).json({ msg: 'Aluno excluído com sucesso!' })
      } catch (err) {
        res.status(400).json({ error: [...err] })
      }
    }

}

module.exports = alunoController;