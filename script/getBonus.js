let cuponUsed = false;
document.getElementById('coupon-btn').addEventListener('click', function(){
    if(cuponUsed === true){
        alert('Coupon already used');
        return;
    }
    const couponValue = getValueFromInput('coupon-number');
    const myBalance = getBalance();
    const couponTaka = 1000;
    const newBalance = myBalance + couponTaka;
    if(couponValue === 'Sahed2580'){
        setBalance(newBalance)
        console.log(`Congratulations! You have won a ${couponTaka} Taka, New Balance: ${newBalance}`);

        const history = document.getElementById('history-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="transactions-card p-5 bg-base-100">
            Recive coupon amount ${couponTaka} Taka Success , at ${new Date()}
        </div>
        `
        history.prepend(newHistory)
        cuponUsed = true;
    }
    else{
        alert('Your coupon is invalid');
        return;
    }
})