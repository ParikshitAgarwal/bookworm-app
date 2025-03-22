import mongoose from 'mongoose'

export const connectDB = async () =>{

    try {
        const mongoDb = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected ${mongoDb.connection.host}`)
    } catch (error) {
        console.log("Error connecting to database",error)
        process.exit(1)
    }
}