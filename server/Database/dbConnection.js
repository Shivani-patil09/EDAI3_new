const { default: mongoose } = require("mongoose");

const dbConnection = async ()=>{

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
      } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
      }
}

module.exports = dbConnection;