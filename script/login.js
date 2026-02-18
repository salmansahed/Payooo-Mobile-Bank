document.getElementById('login-btn').addEventListener('click', function(){
    //01: Get the mobile number
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    //02: Get the pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);
    //03: Macth pin & mobile number
    if(contactNumber === '01614869602' && pin === '0978'){
        //3-1 true:::>> alert> home page
        alert('Login Success');

        // window.location.replace('/home.html')
        window.location.assign('/home.html')
    }
    else{
        //3-1 false:::>> alert> return
        alert('Login Failed');
        return;
    }
})