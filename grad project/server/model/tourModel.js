import mongoose from "mongoose";


const tourSchema =new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  img:{
    type:String,
    required:true,
  },
})

export default mongoose.model("tours", tourSchema);