import express,{Request,Response} from "express";
import { signIn, signUp } from "../controllers/user";
const router = express.Router();

router.get("/",(req:Request,res:Response)=>{
    return res.send("working")
})
router.post("/signUp",signUp)
router.post("/signIn",signIn)

export default router;