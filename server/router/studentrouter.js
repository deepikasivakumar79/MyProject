import express from "express";
const router = express.Router();

import {getstudent,createstudent,updatestudent,deletestudent} 
from "../Controller/studentcontroller.js"; 


 

router.get("/get",getstudent);
 
router.post("/create",createstudent);

router.put("/update",updatestudent);

router.delete("/delete/:id",deletestudent);


export default router;