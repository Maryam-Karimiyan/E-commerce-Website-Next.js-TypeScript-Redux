'use server'
import {UserDocument} from "../model/user";
import User from "../model/user";
import { connectDb } from "../mongodb";
import bcrypt from "bcryptjs";

const registerUser=async(UserProps:UserDocument)=>{
    const {name,family,email,password,userName,phoneNumber}=UserProps
    try {
        await connectDb()
        const user=await User.findOne({$or:[{email},{userName}]})
        if(user){
            return{
                error:"This Email Or UserName Is Registered Before!"
            }
        }
        const hashedPassword=await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            family,
            phoneNumber,
            userName,
            email,
            password: hashedPassword,
          });
          const savedUser = await newUser.save();
  
    } catch (error) {
        console.log(error);
        
    }
}

export {registerUser}
