document.getElementById('pay-bill-btn').addEventListener('click', function(){
    const bankAccount = getValueFromInput('pay-bill-bank');
    if(bankAccount === 'Select bank'){
        alert('Please select a bank');
        return;
    }

    const billerAccountNumber = getValueFromInput('pay-bill-number');
    if(billerAccountNumber.length !== 11){
        alert('Invalid Account Number');
        return;
    }

    const amountPay = getValueFromInput('pay-bill-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance - amountPay;
    if(newBalance < 0 || amountPay <= 0 ){
        alert('Insufficient Balance');
        return;
    }

    const pin = getValueFromInput('pay-bill-pin');
    if(pin === '0978'){
        alert('Pay Bill Success');
        setBalance(newBalance);
        console.log('New Balance:', newBalance);

        const history = document.getElementById('history-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="transactions-card p-5 bg-base-100">
            Pay bill amount ${amountPay} Taka Success , at ${new Date()}
        </div>
        `
        history.prepend(newHistory)
    }
    else{
        alert('Invalid Pin Number');
        return;
    }
})