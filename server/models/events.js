import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  eventName: { type: String, required: true },
  club: { type: String, required: true },
  desc: { type: String, required: true },
  limit:{type:Number,required:false},
  tags:{type:Array,required:true},
  image:{type:String,required:true},
  id: { type: String },
  creator:{type:String},
  participants: {type:Array,required:false},
});

const Event = mongoose.model("Event", eventSchema);
export default Event;