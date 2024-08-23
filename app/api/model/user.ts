import mongoose from "mongoose";
import { Schema,model } from "mongoose";
export interface UserDocument {
  _id: string;
  name: string;
  family: string;
  email: string;
  phoneNumber: string;
  userName: string;
  password: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
const UserSchema = new Schema<UserDocument>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  family: {
    type: String,
    required: [true, "Family is required"],
  },
  phoneNumber: {
    type: String,
  },
  userName: {
    type: String,
    required: [true, "UserName is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const User=mongoose.models?.User || model<UserDocument>('User', UserSchema);
export default User
