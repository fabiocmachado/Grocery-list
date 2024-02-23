import mongoose from "mongoose";
import 'dotenv/config'

async function DB() {
  try {
    await mongoose.connect(process.env.URL as string);
    console.log("DB connected!")
  } catch(err: any){
        console.log(err);
  }
}

export default DB;