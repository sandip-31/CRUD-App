import mongoose from 'mongoose';

 export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://sandip:Sandip123@cluster0.ke5mgtz.mongodb.net/?retryWrites=true&w=majority", { retryWrites: true, w: 'majority' });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error:any) {
    console.log(`Error: ${error.message}`);
    process.exit();
  } 
};
  




