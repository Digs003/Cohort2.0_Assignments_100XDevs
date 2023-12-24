const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course}=require("../db/index");
const jwt=require("jsonwebtoken");
const mypwd="ssshhh";


// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const {username,password}=req.body;

    const existing=await User.findOne({username});
    if(existing){
        res.status(400).json({message:"Username already exists"});
        return;
    }else{
        await User.create({username,password});
        res.status(200).json({message:"User created successfully"});
    }
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const {username,password}=req.body;
    const user=await User.findOne({username,password});
    if(!user){
        return res.status(401).json({message:"Wrong username or password"});
    }else{
        const token=jwt.sign({username},mypwd);
        return res.status(200).json({token});
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const allCourses=await Course.find({});
    return res.status(200).json({courses:allCourses});
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const course=await Course.findById(req.params.courseId);
    if(course){
        const user=await User.findOne({username:req.username});
        if(user.courses.includes(course._id)){
            res.status(400).json({message:"You have already purchased this course"});
            return;
        }
        user.courses.push(course._id);
        await user.save();
        res.status(200).json({message:"Course purchased successfully"});
    }else{
        res.status(401).json({message:"No course available with this id"});
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user=await User.findOne({username:req.username});
    let courses=[];
    for(let courseId of user.courses){
        const course=await Course.findById(courseId);
        courses.push(course);
    }
    res.status(200).json({courses:courses});
});

module.exports=router;
