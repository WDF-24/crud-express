const express = require('express')
const router =  express.Router()

const {
    getReservas,
    getReservasId,
    postReserva,
    putReserva,
    deleteReserva,
} = require('../controllers/controllers')

router.post('/', postReserva)
router.get('/', getReservas)
router.get('/:id', getReservasId)
router.put('/:id',putReserva)
router.delete('/:id',deleteReserva)

module.exports = router