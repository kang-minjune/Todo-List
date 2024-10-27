import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema(
    {
        listitem : {
            type: String, 
            required: true,
        },
        memo : {
            type: String, 
            required: false,
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
            require: false,
        },
        emoji : {
            type: String,
            requireL: false,
            enum: [
                    'https://cdn-icons-png.freepik.com/256/1555/1555296.png?ga=GA1.1.1904555110.1723267261&semt=ais_hybrid',
                    'https://cdn-icons-png.freepik.com/256/1555/1555295.png?ga=GA1.1.1904555110.1723267261&semt=ais_hybrid',
                    'https://cdn-icons-png.freepik.com/256/1555/1555302.png?ga=GA1.1.1904555110.1723267261&semt=ais_hybrid',
                    'https://cdn-icons-png.freepik.com/256/1555/1555294.png?ga=GA1.1.1904555110.1723267261&semt=ais_hybrid',
                    'https://cdn-icons-png.freepik.com/256/1555/1555293.png?ga=GA1.1.1904555110.1723267261&semt=ais_hybrid',
                    'https://cdn-icons-png.freepik.com/256/1555/1555288.png?ga=GA1.1.1904555110.1723267261&semt=ais_hybrid',
            ]
        },
        check : {
            type: Boolean,
            require: true,
            default: false,
        }
    },
    { timestamps: true }
);

export default mongoose.model("List", ListSchema);