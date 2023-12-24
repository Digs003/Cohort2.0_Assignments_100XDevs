const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course}=require("../db/index");

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const newAdmin=await Admin.create({
        username:req.body.username,
        password:req.body.password
    });
    await newAdmin.save();
    res.status(200).json({
        message:"Admin created successfully"
    });
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const newCourse=await Course.create({
        title:req.body.title,
        description:req.body.description,
        price: req.body.price,
        image: req.body.image
    });
    await newCourse.save();
    res.status(200).json({
        message:"Course created successfully"
    });
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const allCourses=await Course.find({});
    res.status(200).json({
        courses:allCourses
    });
});

module.exports = router;