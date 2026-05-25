import mongoose,{Schema} from "mongoose";
const ReportSchema = new Schema({pollingUnitId:String,ward:String,lga:String,turnout:Number,accreditationStatus:{type:String,enum:["PENDING","ONGOING","COMPLETED"]},issues:[String],media:[String],createdBy:{type:Schema.Types.ObjectId,ref:"User"},timestamp:{type:Date,default:Date.now},validated:{type:Boolean,default:false}},{timestamps:true});
export default mongoose.models.Report || mongoose.model("Report",ReportSchema);
