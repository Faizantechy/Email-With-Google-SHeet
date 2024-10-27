
const url='https://script.google.com/macros/s/AKfycbwzj6SYLChsePNgIRb9e5udYTxETx3qbyVL75mV0NW5LwGco7rXrwLxcdNlmcoEIs6_-A/exec'
const msg=document.querySelector('.msg')
const emailForm=document.querySelector('.email-form')
const submitBtn=document.querySelector('.btn')
const email=document.querySelector('.email-box')


function sendEmail(){

    const formData = new FormData(emailForm);
    


    fetch(url,{

        method: 'POST',
        body: formData // Send the FormData object directly

    }).then(response=> response.text()).then(data=>{

        
        msg.innerHTML='Thanks for Submiting'

        setTimeout(() => {
            msg.innerHTML=''

            
        }, 5000);


        email.value='';

    }).catch(error=>{
        msg.innerHTML='There was an error!'


    })
}



submitBtn.addEventListener('click',(e)=>{
e.preventDefault()
sendEmail()

})
