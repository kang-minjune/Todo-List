import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

// import authRoute from './routes/auth.js';
// import userRoute from './routes/user.js';
// import checkRoute from './routes/check.js';
// import nocheckRoute from './routes/nocheck.js';

const app = express();
dotenv.config();

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
}

app.use(cookieParser());
app.use(express.json());

const corsOptions = {
    origin : [
        'http://localhost:3000',
        'http://192.168.0.236:3000'
    ],
    credentials : true,
};
app.use(cors(corsOptions));

app.use(morgan('combined'));

// app.use("/api/auth", authRoute);
// app.use("/api/user", userRoute);
// app.use("/api/nocheck", nocheckRoute);
// app.use("/api/check", checkRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

app.listen(process.env.PORT, () => {
    connect();
    console.log("Connected to backend.");
});