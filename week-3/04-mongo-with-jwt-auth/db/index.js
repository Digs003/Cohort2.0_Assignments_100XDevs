const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://digantamindia:eTHE7NUtd4qheVAP@cluster0.wnszqsw.mongodb.net/userappnew');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'courses'
    }
    ]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    image: String
});

const Admin = mongoose.model('admins', AdminSchema);
const User = mongoose.model('users', UserSchema);
const Course = mongoose.model('courses', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}