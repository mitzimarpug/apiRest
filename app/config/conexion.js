const config = require('./configuracion')
const mongoose = require('mongoose')

module.exports={
    connection: null,
    connect: ()=>{
        if (this.connection) return this.connection
            return mongoose.connect(config.DB)
            .then(conn => {
                this.connection = conn
                console.log('La conexión se realizó con éxito');
            })
            .catch(e =>{console.log(`Error en la conexión ${e}`)})
    }
}

// Mitzi Guadalupe Martinez Puga