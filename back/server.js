const app = require('./app')
const connectDB = require('./config/database') 
const PORT = process.env.PORT || 4000


// Connect to database
connectDB() 

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
}) 