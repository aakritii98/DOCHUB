const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
})

router.get("/adminLogin",(req,res)=>{
    res.render('login');
})

router.get("/departmentLogin",(req,res)=>{
    res.render('login2');
})

router.get("/teacherLogin",(req,res)=>{
    res.render('TLogin');
})

router.get("/resetpass",(req,res)=>{
    res.render('resetpass');
})

router.get("/dpresetpass",(req,res)=>{
    res.render('dpresetpass');
})

router.get("/tcresetpass",(req,res)=>{
    res.render('tcresetpass');
})

router.get("/signup",(req,res)=>{
    res.render('signup');
})
router.get("/adminhome",(req,res)=>{
    res.render('admin');
})

router.get("/departmentadd",(req,res)=>{
    res.render('departmentadd');
})
router.get("/removeDepartment",(req,res)=>{
    res.render('departmentremove');
})

router.get("/teacheradd",(req,res)=>{
    res.render('teacheradd');
})
router.get("/teacherremove",(req,res)=>{
    res.render('teacherremove');
})
router.get("/viewDepartments",(req,res)=>{
    res.render('viewdepartment');
})

router.get('/finaleditprofile',(req,res)=>{
    res.render('finaleditprofile');
})
router.get('/departmenteditprofile',(req,res)=>{
    res.render('departmenteditprofile');
})
router.get('/teachereditprofile',(req,res)=>{
    res.render('finaleditprofileT');
})

router.get('/teacher',(req,res)=>{
    res.render('teacher');
    
})
router.get('/trecords',(req,res)=>{
    res.render('trecords');

})
router.get('/adminTeacherList',(req,res)=>{
    res.render('teacher_view_admin');
})

router.get('/adresearch',(req,res)=>{
    res.render('adresearch');
})
router.get('/publications',(req,res)=>{
    res.render('publications');
})
router.get('/conference',(req,res)=>{
    res.render('conference');
})
router.get('/teacherbook',(req,res)=>{
    res.render('teacherbook');
})
router.get('/academicaward',(req,res)=>{
    res.render('academicaward');
})
router.get('/symposia',(req,res)=>{
    res.render('symposia');
})
router.get('/seminar',(req,res)=>{
    res.render('seminar');
})
router.get('/workshop',(req,res)=>{
    res.render('workshop');
})

router.get("/teacher_view",(req,res)=>{
    res.render('teacher_view');
})

router.get("/depart",(req,res)=>{
    res.render('depart');
})

router.get('/viewrecord',(req,res)=>{
    res.render('viewrecord');

})

router.get('/adgenerate',(req,res)=>{
    res.render('adgenerate');

})
router.get('/dpgenerate',(req,res)=>{
    res.render('dpgenerate');

})
router.get('/viewGenerate',(req,res)=>{
    res.render('view_generate_report');

})

router.get('/viewDepartmentGenerate',(req,res)=>{
    res.render('view_department_report');

})

module.exports = router