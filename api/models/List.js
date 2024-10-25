import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema(
    {
        listitem : {
            type: String, 
            required: true,
        },
        memo : {
            type: String, 
            required: true,
        },
        createdate : {
            type: Date,
            require: true,
        },
        enddate : {
            type: Date,
            require: true,
        },
        updatedate:{
            type: Date,
            require: true,
        },
        emoji : {
            type: String,
            requireL: false,
        },
        check : {
            type: Boolean,
            default: false,
        }
    },
    { timestamps: true }
);

export default mongoose.model("List", ListSchema);