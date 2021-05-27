const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const Department = require('../models/departmentSchema');
const Teacher = require('../models/teacherSchema');
const bcrypt=require('bcrypt')

router.put('/forgotpassword', async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashpassword=await bcrypt.hash(password,10)
        console.log(email, hashpassword)
        const updatedUser = await User.findOneAndUpdate({ email }, { password:hashpassword }, { new: true })
        if (!updatedUser) {
            throw new Error('Update failed')
        }
        res.json({
            status: 'success',
            message: 'Update success',
            data: updatedUser
        });
    }
    catch (e) {
        res.status(400).json({
            status: 'failure',
            message: e.message
        });
    }

})

router.put('/departforgotpassword', async (req, res) => {
    try {
        const { emailid, password } = req.body;
        const hash_password=await bcrypt.hash(password,10)
        console.log(emailid, hash_password)
        const updatedDepartment = await Department.findOneAndUpdate({ emailid }, { password:hash_password }, { new: true })
        if (!updatedDepartment) {
            throw new Error('Update failed')
        }
        res.json({
            status: 'success',
            message: 'Update success',
            data: updatedDepartment
        });
    }
    catch (e) {
        res.status(400).json({
            status: 'failure',
            message: e.message
        });
    }

})

router.put('/teachforgotpassword', async (req, res) => {
    try {
        const { emailid, password } = req.body;
        const hashpassword=await bcrypt.hash(password,10)
        console.log(emailid, hashpassword)
        const updatedTeacher = await Teacher.findOneAndUpdate({ emailid }, { password:hashpassword }, { new: true })
        if (!updatedTeacher) {
            throw new Error('Update failed')
        }
        res.json({
            status: 'success',
            message: 'Update success',
            data: updatedTeacher
        });
    }
    catch (e) {
        res.status(400).json({
            status: 'failure',
            message: e.message
        });
    }

})

module.exports = router;