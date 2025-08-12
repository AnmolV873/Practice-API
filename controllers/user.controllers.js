import express from 'express';
import userServices from '../services/user.services.js';

const getallUser = async (req, res, next) => {                
    try {
        const users = await userServices.getallUser();        
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const createUser = async (req, res, next) => {
    try {
        const user = await userServices.createUser(req);
        res.status(201).json(user);
    }catch (error) {    
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }}

const deleteUser = async (req, res, next) => {
    try{
        const userId = req.body.id;
        const result = await userServices.deleteUser(userId);
        if (result) {
            res.status(200).json({ message: "User deleted successfully" });
        } else {
            res.status(404).json({ message: "User not found" });
        }

    }catch(error){
        res.status(500).json({message: "Internal server error" });
    }
}

export {
    getallUser,
    createUser,
    deleteUser
}