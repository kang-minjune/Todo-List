import User from '../models/User.js';
import jwt from 'jsonwebtoken';

//암호 해시화 하는 라이브러리
import bcrypt from 'bcryptjs';

//회원가입 기능 코드
export const register = async (req, res, next) => {
    try{
        const salt = await bcrypt.genSalt(10);     
        const hashPassword = await bcrypt.hash(req.body.password, salt); 
        const newUser = new User({
            ...req.body,
            password: hashPassword, 
        });

        console.log(req.body)
        await newUser.save();
        res.status(200).send("User has been created. Welcome!");
        
    } catch (err) {
        console.log(err)
        next(err);
    }
}


//로그인 기능 코드
export const login = async (req, res, next) => {
    try{
        const user = await User.findOne({ userid: req.body.userid });
        if(!user){          
            return res.status(404).json({ message: "유저를 찾지 못했습니다." });
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) {
            return res.status(400).json({ message: "패스워드가 올바르지 않습니다." });
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