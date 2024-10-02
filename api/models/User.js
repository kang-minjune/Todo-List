import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
        {
            username:{
                type: String, 
                required: true,
                unique: true,
            },
            password: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
                unique: true,
            },
            realname: {
                type: String,
                required: true,
                
            },
            gender: {
                type: String,
                required: true,
            },
            address: {
                type: String,
                required: true,
            },
            addressdetail: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
            profile: {
                type: String,
            },
            isAdmin: {
                type: Boolean,
                default: false,
            },
        },
        { timestamps: true }
);

export default mongoose.model("User", UserSchema);