const express = require('express')
const router = express.Router();
const alunoController = require('../controllers/alunoController')

router.get('/',alunoController.list)
router.get('/detail/:id',alunoController.findById)
router.get('/busca/:termo',alunoController.find) // Função que retorna realizando busca pelo operador like
router.get('/order',alunoController.ordenedEntry) // Função que os 10 ultimos alunos matriculados

module.exports = router;