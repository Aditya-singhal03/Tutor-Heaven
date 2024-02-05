import prisma from "../../prisma/pismaClient";
import { Request,Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

interface signUpRequest {
    name: string;
    password: string;
    email: string;
    role: string;
}
interface signInRequest {
    password: string;
    email: string;
}

async function hashPassword(password:string) {
    const saltRounds = 10; // You can adjust the number of salt rounds based on your security requirements
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

export const signUp = async (req:Request,res:Response)=>{
    const {name,password,email,role}:signUpRequest = req.body;
    const hashedPassword = await hashPassword(password);
    const user  = await prisma.user.create({
        data:{
            name:name,
            email:email,
            role:role,
            password:hashedPassword
        }
    })
    console.log(user)
    return res.status(201).json(user);
}

export const signIn = async (req:Request,res:Response)=>{
    const {email,password}:signInRequest = req.body;
    const user = await prisma.user.findUnique({
        where:{
            email:email
        }
    });
    console.log(user);
    if(!user) return res.status(404).json({ error: 'User not found' });
    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect) return res.status(401).json({error:"Incorrect password"});
    const token = jwt.sign({id:user.id,email:user.email,role:user.email},"secret_key",{expiresIn:'1d'});
    console.log(token);
    res.status(200).json({ token });
}