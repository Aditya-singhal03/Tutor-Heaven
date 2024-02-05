import prisma from "../../prisma/pismaClient";
import { Request,Response } from "express";
interface courseCreateRequest{
    name:string,
    description:string,
    price:number,
    image:string
}
interface addFolderContentRequest{
    type: string,
    name:string,
    courseId:number,
    image?:string
}
export const createCourse =async (req:Request,res:Response) => {
    const {name,description,price,image}:courseCreateRequest = req.body;
    try{
        const course = await prisma.course.create({
            data:{
                name:name,
                description:description,
                price:price,
            }
        });
        console.log(course);
        res.status(201).json(course);
    }catch(err){
        console.log(err);
        res.status(500).json({message:"server error, course not created"})
    }
}

export const addFolderContent = async (req:Request,res:Response)=>{
    const {type,name,courseId,image}:addFolderContentRequest = req.body;
    try{
        const courseContent = await prisma.course.update({
            where:{
                id:courseId
            },
            data:{
                contents:{
                    create:{
                        type:type,
                        name:name,
                        image:image
                    }
                }
            },
            include:{
                contents:true
            }
        });
        console.log(courseContent);
        res.status(201).json(courseContent);
    }catch(err){
        console.log(err);
        res.status(500).json({message:"server error, content not created"})
    }
}