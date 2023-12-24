const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const {User, Course}=require("../db/index");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const newUser=await User.create({
        username:req.body.username,
        password:req.body.password
    });
    await newUser.save();
    res.status(200).json({
        message:"User Created successfully"
    });
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const allCourses=await Course.find({});
    res.status(200).json({
        courses:allCourses
    });
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;
    const course=await Course.findById(courseId);

    if(course){
        const user=await User.findOne({username:req.headers.username});
        if(user.courses.includes(course._id)){
            res.status(400).json({message:"Course is already purchased"});
            return;
        }
        user.courses.push(course._id);
        await user.save();
        res.status(200).json({message:"Course purchased successfully"});
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username=req.headers.username;
    const user= await User.findOne({username:username});
    let courses=[];
    for(let courseId of user.courses){
        const course=await Course.findById(courseId);
        courses.push(course);
    }
    res.status(200).json({
        courses:courses
    });
});

module.exports=router;