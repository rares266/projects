const CORRECT_PIN = '1234';
let BALANCE = 30;

const enterButton = document.getElementById('enter-button');
console.log('enterButton:', enterButton);
enterButton?.addEventListener('click', () => {
    console.log('You clicked me!');

    const pinInput = document.getElementById('pin-input');
    console.log('pinInput:', pinInput);

    if (pinInput instanceof HTMLInputElement) {
        const pin = pinInput.value;
        console.log('pin:', pin);

        if (!pin) {
            alert('Please enter a PIN');
        } else if (pin != CORRECT_PIN) {
            alert('Incorrect PIN');
        } else {
            const pinSection = document.getElementById('pin-section');
            console.log('pinSection:', pinSection);
            pinSection?.classList.add('hidden');

            const actionsSection = document.getElementById('actions-section');
            console.log('actionsSection:', actionsSection);
            actionsSection?.classList.remove('hidden');

            const systemMessage = document.getElementById('system-message');
            console.log('systemMessage:', systemMessage);
            systemMessage?.classList.remove('hidden');
        }
    };
});

const depositButton = document.getElementById('deposit-button');
console.log('depositButton:', depositButton);
depositButton?.addEventListener('click', () => {
    console.log('deposit button clicked');

    const _amount = prompt('Enter the amount you want to deposit');
    const amount = parseFloat(_amount || '');
    console.log('amount:', amount);

    if (isNaN(amount)) {
        alert('Invalit amount. Please provide a number');
    } else {
        BALANCE += amount;

        const systemMessage = document.getElementById('system-message');
        console.log('systemMessage:', systemMessage);

        if (systemMessage) {
            systemMessage.textContent = `You have deposited ${amount} RON. Your new balance is ${BALANCE} RON`;
        }
    }
})

const balancebutton = document.getElementById('balance-button');
console.log('balance-button:', balancebutton);
balancebutton?.addEventListener('click', () => {
    console.log('withdraw button clicked');

    const systemMessage = document.getElementById('system-message');
    console.log('systemMessage:', systemMessage);

    if (systemMessage) {
        systemMessage.textContent = ` Your new balance is ${BALANCE} RON`;
    }

})


//WITHDRAW
const withdrowButton = document.getElementById('withdraw-button');
console.log('withdrowButton:', withdrowButton);
withdrowButton?.addEventListener('click', () => {
    console.log('withdraw button clicked');

    const _amount = prompt('Enter the amount you want to withdrow');
    const amount = parseFloat(_amount || '');
    console.log('amount:', amount);

    if (isNaN(amount)) {
        alert('Invalit amount. Please provide a number');
    } else {
        if(BALANCE >= amount){
            BALANCE -= amount;

            const systemMessage = document.getElementById('system-message');
            console.log('systemMessage:', systemMessage);
    
            if (systemMessage) {
                systemMessage.textContent = `You withdrew ${amount} RON. Your new balance is ${BALANCE} RON`;
            }
        } else{
            alert('Nu ai suficienti bani ca sa poti efectua retrageri');
        }       
        
    }
})

//CANCEL
const cancelButton = document.getElementById('cancel-button');
console.log('enterButton:', cancelButton);
cancelButton?.addEventListener('click', () => {
    console.log('You clicked me!');

    const confirmare = confirm('Doresti sa inchizi aplicatia ATM ?');
    if(confirmare){
        const pinSection = document.getElementById('pin-section');
        console.log('pinSection:', pinSection);
        pinSection?.classList.remove('hidden');

        const actionsSection = document.getElementById('actions-section');
        console.log('actionsSection:', actionsSection);
        actionsSection?.classList.add('hidden');

        const systemMessage = document.getElementById('system-message');
        console.log('systemMessage:', systemMessage);
        systemMessage?.classList.add('hidden');
    }
});
