let reservas = []

const getReservas = async(req,res) =>{
res.json({
    msg: "Todas las reservas de la base de datos",
    data: reservas
})
}

const getReservasId = async(req,res) =>{
    const orderId = parseInt(req.params.id)
    const order = reservas.find((o) => o.id === orderId)
    if(!order){
        return res.status(404).json({ msg: "No se encuentra en la base de datos"})
    }

    res.json({
        msg: "Reserva localizada",
        data: order
    })
}

const postReserva = async(req,res) =>{
    const newReserva = req.body
    newReserva.id = reservas.length + 1
    
    reservas.push(newReserva)

    res.status(200).json({
        msg: "Reserva enviada",
        data: reservas
    })
}

const putReserva = async(req,res) =>{
//     const orderId = parseInt(req.params.id)
//     console.log(orderId)
//     const reservaIndex = reservas.findIndex((o) => o.id === orderId)
//    console.log(reservaIndex)
//     if(reservaIndex === -1){
//         return res.status(404).json({
//             msg: "Elemento no encontrado en la base, no es posible actualizar"
//         })
//     }

//     reservaIndex[orderId] = {...reservas[orderId], ...req.body}
    
//     res.json({
//         msg: "Reserva actualizada",
//         data: reservas[reservaIndex]
//     })

const orderId = parseInt(req.params.id)
const orderIndex = reservas.findIndex((o) => o.id === orderId)

if(orderIndex === -1){
    return res.status(404).json(
        {
            msg: "Reserva no encontrada"
        }
    )
}

reservas[orderIndex] = {... reservas[orderIndex], ...req.body}
res.json({
    msg: 'Reserva actualizada con exito',
    data: reservas[orderIndex]
})

}

const deleteReserva = async(req,res)=>{
    const orderId = parseInt(req.params.id)
    const reservaIndex = reservas.findIndex((o) => o.id === orderId)

    reservas.splice(reservaIndex, 1)
    res.json({
        msg: "Dato eliminado correctamente"
    })
}

module.exports = {
    getReservas,
    getReservasId,
    postReserva,
    putReserva,
    deleteReserva,  
}

