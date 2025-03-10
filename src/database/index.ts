/* eslint-disable @typescript-eslint/no-explicit-any */

import mongoose from "mongoose";

const connectDB = async(url : string) =>{ //menerima parameter url
    try {
        const connecting = await mongoose.connect (url)
        console.log(`MonngoDB Connected : ${connecting.connection.host}`)
    } catch (error:any) {
        console.error(`Error : ${error.message}`)
    }
}

export default connectDB