import User from '../models/User.js';
import jwt from 'jsonwebtoken';

import bcrypt from 'bcryptjs';

import { ObjectId } from 'mongodb';

export const userGet = async(req, res, next) => {
    try{
        const userInfo = await User.findById(req.params.id);
        console.log(userInfo);
        res.status(200).json(userInfo);
    } catch(err) {
        console.log(err);
        next(err);
    }
}

export const userUpdate = async(req, res, next) => {
    try{
        const userId = await User.findById(req.params.id);

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt); 

        if(!ObjectId.isValid(userId)){
            return res.status(400).json({ message: "Invalid ID format", userId});
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                $set: {
                    username: req.body.username,
                    password: hashPassword,
                    email: req.body.email,
                    realname: req.body.realname,
                    gender: req.body.gender,
                    phone: req.body.phone,
                    address: req.body.address,
                    addressdetail: req.body.addressdetail,
                    address: req.body.address,
                }
            },
            {new: true, runValidators: true }
        );

        if(!updatedUser) {
            return res.status(404).json({ message: "List not found" });
        }

        console.log(updatedUser);
        res.status(200).json(updatedUser);
    } catch(err) {
        console.log('Error updating user document: ', err);
        next(err);
    }
}

export const userDelete = async(req, res, next) => {
    try{
        const userId = await User.findById(req.params.id);
        await User.findByIdAndDelete(userId)
        res.status(200).json("User has been deleted."); 
    } catch(err) {
        console.log(err);
        next(err);
    }
}