import express,{Request,Response} from 'express'
import { User } from '../model/userModel';
const router=express.Router();

router.route('/')
// GET ALL USERS
.get(async(req:Request,res:Response)=>{
    try {
        const users=await User.find({});
        res.status(200).json({
            message:'success',
            data:users,
        })
    } catch (error) {
        res.status(400).json({
            message:'failed',
            error:error
        })
    }
})
// POST A USER
.post(async(req:Request,res:Response)=>{
    try {
        const {name,email,phoneNumber,hobbies}=req.body;
        if(!name || !email || !phoneNumber || !hobbies){
            res.status(400).json({
                message:"invalid credential",
                data:null
            })
            return;
        }
        const users=await User.create({name,email,phoneNumber,hobbies});
        res.status(200).json({
            message:'success',
            data:users,
        })
    } catch (error) {
        res.status(400).json({
            message:'failed',
            error:error
        })
    }
})

// DATA UPDATING AND DELETING
router.route('/:id')
// Update A USER
.put(async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const user=await User.findByIdAndUpdate(id,req.body);
        res.status(200).json({
            message:'success',
            data:user,
        })
    } catch (error) {
        res.status(400).json({
            message:'failed',
            error:error
        })
    }
})
// GET ALL USERS
.delete(async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const user=await User.findByIdAndDelete(id);
        res.status(200).json({
            message:'success',
            data:user,
        })
    } catch (error) {
        res.status(400).json({
            message:'failed',
            error:error
        })
    }
})

export default router;