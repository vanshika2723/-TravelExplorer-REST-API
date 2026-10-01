const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


/* =========================
   GENERATE JWT TOKEN
========================= */

const generateToken = (userId) => {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );
};


/* =========================
   REGISTER USER
========================= */

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;


        // Required fields
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email and password are required"
            });
        }


        // Password validation
        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long"
            });
        }


        // Check existing user
        const existingUser = await User.findOne({
            email: email.toLowerCase()
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User with this email already exists"
            });
        }


        // Hash password
        const hashedPassword = await bcrypt.hash(
            password,
            10
        );


        // Create user
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password: hashedPassword
        });


        // Generate token
        const token = generateToken(user._id);


        res.status(201).json({
            success: true,
            message: "Registration successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Registration failed",
            error: error.message
        });

    }
};


/* =========================
   LOGIN USER
========================= */

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;


        // Required fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }


        // Find user
        const user = await User.findOne({
            email: email.toLowerCase()
        });


        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }


        // Compare password
        const isPasswordValid =
            await bcrypt.compare(
                password,
                user.password
            );


        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }


        // Generate token
        const token = generateToken(user._id);


        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Login failed",
            error: error.message
        });

    }
};
/* =========================
   GET MY PROFILE
========================= */

const getMyProfile = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Profile fetched successfully",
            user: req.user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch profile",
            error: error.message
        });
    }
};


module.exports = {
    registerUser,
    loginUser,
    getMyProfile
};