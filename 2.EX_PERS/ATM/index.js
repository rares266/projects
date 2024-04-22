

// LOGIN§§
document.querySelector('.btn-login')?.addEventListener('click', function () {
  const pinInput = document.querySelector('.input')
  const validPin = '1234'

  // Makes the code look cleaner / simpler.
  if (pinInput?.value !== validPin) {
    alert('Incorrect PIN')
    pinInput.value = ''
    pinInput?.focus()
    return; // Returns undefined, closes the function early
  }

  // Aici am facut forEach, dar apoi de fiecare data cand scoatem un hidden,
  //  executam tot codul de mai jos care este complet static.
  //  nu folosim parametrul el decat la el.classList.remove('hidden')
  document.querySelectorAll('.hidden').forEach(function (el) {
    el.classList.remove('hidden')
  })

  document.querySelector('.regular-text').textContent = 'AVAILABLE OPERATIONS'
  document.querySelector('.input')?.classList.add('hidden')
  document.querySelector('.btn-login')?.classList.add('hidden')
})

// CANCEL
  document.querySelector('.cancel-btn')?.addEventListener('click', function () {
  document.querySelectorAll('.hidden').forEach(function (el) {
    el.classList.remove('hidden')
  })

  document.querySelector('.btn-account')?.classList.add('hidden')
  document.querySelector('.system-message')?.classList.add('hidden')
})

// DEPOSIT
let sum = 0
document.querySelector('.deposit-btn')?.addEventListener('click', function () {
  let amount = Number(prompt('What is the amount you want to deposit?'))
  if (amount && amount >= 0) {
    sum += amount
    document.querySelector('.system-message')?.classList.remove('error-text');
    document.querySelector('.system-message').textContent = ` ${amount} EUR DEPOSITED. AVAILABLE BALANCE: ${sum} EUR.`
  } else if (amount < 0) { 
    alert('Please try again with a pozitive amount.')
  } else{
    alert('Invalid amount. Please try again.')
  }
})

//WITHDROW
document.querySelector('.withdraw-btn')?.addEventListener('click', function () {
  let amount = Number(prompt('What is the amount you want to withdraw?'))
  if (amount && amount >= 0 && amount <= sum) {
    sum -= amount
    document.querySelector('.system-message')?.classList.remove('error-text');
    document.querySelector('.system-message').textContent = ` ${amount} EUR WITHDRAW. AVAILABLE BALANCE: ${sum} EUR`
  } else if (amount < 0) {
    alert('Invalid amount. Please try again.')
  } else if (amount > sum) {
    document.querySelector('.system-message')?.classList.add('error-text');
    document.querySelector('.system-message').textContent = 'INSUFFICIENT FUNDS'
  } else{
    alert('Invalid amount. Please try again.')
  }
})

//BALANCE
document.querySelector('.balance-btn')?.addEventListener('click', function () {
  document.querySelector('.system-message')?.classList.remove('error-text');
  document.querySelector('.system-message').textContent = `AVAILABLE BALANCE: ${sum} EUR.`
})

