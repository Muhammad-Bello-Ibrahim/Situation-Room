import mongoose,{Schema} from "mongoose";
const PollingUnitSchema = new Schema({name:String,ward:String,lga:String,status:{type:String,enum:["GREEN","YELLOW","RED"],default:"GREEN"}},{timestamps:true});
export default mongoose.models.PollingUnit || mongoose.model("PollingUnit",PollingUnitSchema);
