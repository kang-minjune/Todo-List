import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema(
    {
        // userid : { //현재 로그인 인증 된 유저 ObjectID
        //     type: String, 
        //     required: true,
        //     unique: true,
        // },
        listitem :{
            type: String, 
            required: true,
        },
        memo : {
            type: String, 
            required: true,
        }
    },
    { timestamps: true }
);

export default mongoose.model("List", ListSchema);