import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  userType: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  college:{type:String},
  active:{type:Boolean}
});

const User = mongoose.model("Users", userSchema);
export default User;
