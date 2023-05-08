const id= (id)=> document.getElementById(id);

const classes = (classes) => document.getElementsByClassName(classes);


const usename= id('username'),
 email= id('email'),
 password = id('password'),
 form=id('form'),
 error= classes('error'),
 successIcon =classes('success-icon'),
 failureIcon =classes('failure-icon');

 form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    checker( username ,0,"User name cannot be empty");
    checker( email ,1,"Email cannot be empty");
    checker( password ,2,"Password cannot be empty");
});


let checker= (id, serial, message)=>{

    if(id.value.trim() === ""){
        error[serial].innerHTML=message;
        failureIcon[serial].style.opacity='1';
        successIcon[serial].style.opacity='0';
        
    }
    else{
        error[serial].innerHTML="";
        
        successIcon[serial].style.opacity='1';
        failureIcon[serial].style.opacity='0';
       
    }
     
};


