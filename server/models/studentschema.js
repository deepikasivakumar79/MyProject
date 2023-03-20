import mongoose from "mongoose";

const Schema = new mongoose.Schema({
     
    Name:{
        type:String,
        required:true
    },
    Course:{
        type:String,
        required:true
    },
    Contact:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
});

export default mongoose.model("forms",Schema);