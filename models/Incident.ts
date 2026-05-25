import mongoose,{Schema} from "mongoose";
const IncidentSchema=new Schema({title:String,description:String,severity:{type:String,enum:["LOW","MEDIUM","HIGH","CRITICAL"]},location:{lga:String,ward:String,pollingUnit:String},status:{type:String,enum:["OPEN","RESOLVED"],default:"OPEN"},media:[String],reportedBy:{type:Schema.Types.ObjectId,ref:"User"},timestamp:{type:Date,default:Date.now}},{timestamps:true});
export default mongoose.models.Incident || mongoose.model("Incident",IncidentSchema);
