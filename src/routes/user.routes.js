import {getUsers,createUser,getUser,deleteUser} from "../controllers/user.controller.js"
import {Router} from 'express';

const router= Router();
router.post("/",createUser);
router.get("/all",getUsers);
router.get("/:id",getUser);
router.delete("/:id",deleteUser);


export default router;