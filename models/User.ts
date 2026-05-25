import mongoose,{Schema} from "mongoose";
const UserSchema = new Schema({name:String,email:{type:String,unique:true},password:String,role:{type:String,enum:["SUPER_ADMIN","LGA_COORDINATOR","WARD_SUPERVISOR","POLLING_UNIT_AGENT","OBSERVER"]},lga:String,ward:String,pollingUnit:String},{timestamps:true});
export default mongoose.models.User || mongoose.model("User",UserSchema);
