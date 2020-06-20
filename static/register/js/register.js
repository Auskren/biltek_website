function e_mail_validation(){

    const email = document.getElementById("email");
               
    email.addEventListener('input',()=>{
        const emailBox = document.querySelector('.emailBox');
        const emailText = document.querySelector('.emailText');
        const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

        if(email.value.match(emailPattern)){
            emailBox.classList.add('valid');
            emailBox.classList.remove('invalid');
        
        }else{
            emailBox.classList.add('invalid');
            emailBox.classList.remove('valid');
            
        }
        if(email.value==0){
            emailBox.classList.remove('invalid');
            emailBox.classList.remove('valid');
           
        }
    });
}