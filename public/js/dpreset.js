const getDepartInputValuesResetPass =()=>{
    const dataObj = {}
    dataObj.email = $("#resetemail").val();
    dataObj.password = $("#resetpass").val();
    dataObj.con_pass = $("#resetconpass").val();
    if(Object.keys(dataObj).length!==0){
        if(validatedepartdata(dataObj)){
            resetdpreq(dataObj)
        }  
        else{
            console.log("Data validations failed")
        }
    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}
const validatedepartdata =(data)=>{
    if(!data.email||!data.password||!data.con_pass||data.email.length===0||data.password.length===0||data.con_pass.length===0){
        console.log("All fields are required")
        return false
    }
    else if(data.password!==data.con_pass){
        console.log("Password does not match")
        return false
    }
    else{
        return true
    }
}
const resetdpreq =async(data)=>{
    $.ajax({
        method:'PUT',
        url:'http://localhost:3000/departforgotpassword',
        data: data,
        dataType: 'json',
        success(data){
            alert('Password Updated Successfully');
        },
        error(e){
            // console.log(e);
            alert('Failed');
        }
      });
}
const ResetDepartClicks = ()=>{
    $('#resetpass').unbind();
    $('#resetsubmit').click(()=>{
        getDepartInputValuesResetPass()
    });
} 

$(document).ready(()=>{
    ResetDepartClicks()
})