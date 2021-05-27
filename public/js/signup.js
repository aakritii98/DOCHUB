
const checkValidation = (data)=>{
    let errorobj={}
    if(data.name ==''){
        errorobj.status=false;
        errorobj.name="name is required";
        return errorobj;
    }
    else if(data.email ==''){
        errorobj.status=false;
        errorobj.name="email is required";
        return errorobj;
    }
    else if(data.institute==''){
        errorobj.status=false;
        errorobj.name="institute code is required";
        return errorobj;
    }
    else if(data.password.length<8){
        errorobj.status=false;
        errorobj.name="Must be at least 8 characters";
        return errorobj;
    }
    else if(data.password !=data.confirmPassword){
        errorobj.status=false;
        errorobj.name="Password do not match";
        return errorobj;
    }
    else {
        errorobj.status=true;
        return errorobj;
    }
}
const signUpApi = async(data)=>{
    const api = API_LIST["SIGNUP"];
    const result = await ajax(REQUEST_TYPE["POST"],api,data);
    console.log(result);
    if(result && result.status == "success"){
        window.localStorage.setItem("TOKEN",result.token);
        window.localStorage.setItem('USER',result.user.email);
        successfull("Sign Up Successful");
        window.location.href='/adminhome';
    }
    else{
        errorsMsg(result.status,result.message);
        console.log(result.status);
    }
}

const getUserInputValues =()=>{
    const dataObj = {}
    dataObj.name = $("#signUpNameId").val();
    dataObj.email = $("#signUpEmaiId").val();
    dataObj.institute = $("#signUpInstitudeNameId").val();
    dataObj.password = $("#signUpPasswordId").val();
    dataObj.confirmPassword = $("#signUpConfirmPassId").val();
    res=checkValidation(dataObj)
    if(res.status){
        signUpApi(dataObj);
    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}

const loadSignupClicks = ()=>{
    $('#signUpSubmitButtonId').unbind();
    $('#signUpSubmitButtonId').click(()=>{
        getUserInputValues()
    });
} 

$(document).ready(()=>{
    loadSignupClicks()
})