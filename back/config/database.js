const mongoose = require('mongoose'); 

const connectDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/Elementos", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(con => { 
        console.log(`MongoDB conectado: ${con.connection.host}`) //mensaje de conexion. con.connection.host es la url de conexion a la base de datos
    }).catch(err => console.log(err))
};

module.exports = connectDB; 