import mongoose,{Document} from "mongoose";

interface UserProps extends Document{
    name:string;
    phoneNumber:string;
    email:string;
    hobbies:string[],
}

const userSchema = new mongoose.Schema<UserProps>({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    hobbies:{
        type:[String],
        required:true
    },
})

export const User=mongoose.model<UserProps>('User',userSchema);