const express = require('express')


const server = express()

server.use(express.json())
server.use('/api/gadgets',GadgetRouter)

server.get('*'. (req,res)=>{
    res.json({API: "UP"})
})

module.exports = server
