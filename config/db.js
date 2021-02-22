const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })

        console.log(`MongoDb Connected : ${conn.connection.host}`);
    } catch (error) {
        console.error(error)
    }
}


module.exports = connectDb