//Machine id ==> input valuel
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

//Machine ==> Balance
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log('Current Balance: ', Number(balance));
    return Number(balance);
}

// Machine value ==> set Balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

// Machine id ==> hide all ==> show id
function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const history = document.getElementById('history');
    const transferMoney = document.getElementById('transfer-money');
    const getBonus = document.getElementById('get-bonus');
    const payBill = document.getElementById('pay-bill');
    // console.log(`Add money- ${addMoney}, Cashout - ${cashout}`);
    //Sobaike hide kore dau
    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    history.classList.add('hidden');
    transferMoney.classList.add('hidden');
    getBonus.classList.add('hidden');
    payBill.classList.add('hidden');

    //id wala element take tumi show korau
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}