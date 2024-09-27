import User from '../models/User.js';
import jwt from 'jsonwebtoken';

//암호 해시화 하는 라이브러리(회원가입에서 해시화를 진행 할 예정.)
// import bcrypt from 'bcryptjs';

//로그인 기능 코드
export const login = async (req, res, next) => {
    try{
        const user = await User.findOne({ username: req.body.username });
        if(!user){
            return res.status(404).json({ message: "User Not Found!" });
        }
        
        const isPasswordCorrect = req.body.password;
        if(!isPasswordCorrect) {
            return res.status(400).json({ message: "Password is incorrect" });
        }

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);
        const { password, isAdmin, ...otherDetails } = user._doc;

        res.cookie("access_token", token ,{
            httpOnly: true,
            sameSite: 'strict',
            path: '/',
        }).status(200)
        .json({ details: {...otherDetails}, isAdmin, token });
        console.log(token);
    } catch (err) {
        next(err);
    }
};

//로그아웃 기능 코드
export const logout = (req, res) => {
    res.clearCookie("access_token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: '/',
        sameSite: 'strict', 
    })
    .status(200)
    .json({message: "Logged out successfully"});
};