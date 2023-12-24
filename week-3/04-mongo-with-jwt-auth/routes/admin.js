const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course}=require("../db/index");
const jwt=require("jsonwebtoken");
const mypwd="ssshhh";

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const {username,password}=req.body;

    const existing=await Admin.findOne({username});
    if(existing){
        res.status(400).json({message:"Username already exists"});
        return;
    }else{
        await Admin.create({username,password});
        res.status(200).json({message:"Admin created successfully"});
    }

});

router.post('/signin', async(req, res) => {
    // Implement admin signin logic
    const {username,password}=req.body;
    const admin=await Admin.findOne({username,password});
    if(!admin)return res.status(401).json({message:"Wrong username or password"});
    else{
        const token=jwt.sign({username},mypwd);
        res.status(200).json({token});
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const {title,description,price,image}=req.body;
    const newCourse=await Course.create({title,description,price,image});
    await newCourse.save();
    res.status(200).json({message:"Course created successfully"});
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const allCourses=await Course.find({});
    res.status(200).json({
        courses:allCourses
    });

});

module.exports = router;