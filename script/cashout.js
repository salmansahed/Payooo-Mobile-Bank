document.getElementById('cashout-btn').addEventListener('click', function(){
    //01: Get the agent number & validate
    const cashoutNumber = getValueFromInput('cashout-number');
    if(cashoutNumber.length !== 11){
        alert('Invalid Agent Number');
        return;
    }
    //02: Get the ammount
    const cashoutAmount = getValueFromInput('cashout-amount');
    const checkMinusAmount = Number(cashoutAmount);
    if(checkMinusAmount < 0){
        alert('Ivalid Amount');
        return;
    }

    //03: Get current balance
    const currentBalance = getBalance();

    //04: Calculate new Balance
    const newBalance = currentBalance - Number(cashoutAmount);
    if(newBalance < 0 ){
        alert('Invalid Amount');
        return;
    }
    
    //05: Get the pin and verify
    const pin = getValueFromInput('cashout-pin');
    if(pin === '0978'){
        //5-1 true:: show an alert > set Balance
        alert('Cashout Successfull')
        console.log('New Balance: ', newBalance);
        setBalance(newBalance);

        //01: History container ke dhore niye asbo
        const history = document.getElementById('history-container');
        //02: new div create korbo
        const newHistory = document.createElement('div');
        //03: new div innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transactions-card p-5 bg-base-100">
            Cashout ${cashoutAmount} Taka Success to ${cashoutNumber} , at ${new Date()}
        </div>
        `
        //04:history container e newDiv append korbo
        history.prepend(newHistory)
    }
    else{
        //5-2 false:: show an error alert > return
        alert('Invalid Pin');
        return;
    }
})