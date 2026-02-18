document.getElementById('add-money-btn').addEventListener('click', function(){
    //01: Bank Account get
    const bankAccount = getValueFromInput('add-money-bank');
    if(bankAccount === 'Select bank'){
        alert('Please select a bank');
        return;
    }

    //02: Get bank account number
    const accNo = getValueFromInput('add-money-number');
    if(accNo.length !== 11){
        alert('Invalid ACC Number');
        return;
    }

    //03: Get amount
    const amount = getValueFromInput('add-money-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);

    const pin = getValueFromInput('add-money-pin');
    if(pin === '0978'){
        // alert('Add Money Success');
        alert(`Add Money Success ${bankAccount} at ${new Date()}`)
        setBalance(newBalance)
        console.log('New Balance:', newBalance);

        //01: History container ke dhore niye asbo
        const history = document.getElementById('history-container');
        //02: new div create korbo
        const newHistory = document.createElement('div');
        //03: new div innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transactions-card p-5 bg-base-100">
            Add Money Success from ${bankAccount} , acc-no ${accNo} at ${new Date()}
        </div>
        `
        //04:history container e newDiv append korbo
        history.prepend(newHistory)
    }
    else{
        alert('Invalid Pin')
        return;
    }
})