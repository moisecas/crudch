const app = require('./app')
const connectDB = require('./config/database') 


// Connect to database
connectDB() 

const server = app.listen(process.env.PORT, () => {
  console.log(`Express running → PORT ${server.address().port}`);
}) 