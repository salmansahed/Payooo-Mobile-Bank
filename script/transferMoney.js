document.getElementById('transfer-moeny-btn').addEventListener('click', function(){
    const transferMoneyNumber = getValueFromInput('transfer-moeny-number');
    if(transferMoneyNumber.length !== 11){
        alert('Invalid Account Number');
        return;
    }

    const transferMoneyAmount = getValueFromInput('transfer-moeny-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance - transferMoneyAmount;
    if(newBalance < 0 || transferMoneyAmount < 0){
        alert('Insufficient balance')
        console.log('Insufficient balance');
        return;
    }

    const pin = getValueFromInput('transfer-moeny-pin');
    if(pin === '0978'){
        alert('Money Transfer Success');
        console.log('new-balance', newBalance);
        setBalance(newBalance)

        const history = document.getElementById('history-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="transactions-card p-5 bg-base-100">
            Transfer Money ${transferMoneyAmount} Taka Success , at ${new Date()}
        </div>
        `
        history.prepend(newHistory)
    }
    else{
        alert('Invalid pin number');
        return;
    }
})