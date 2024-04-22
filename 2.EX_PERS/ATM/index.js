// @ts-nocheck
// LOGIN
document.querySelector('.btn-login').addEventListener('click', function () {
  const pinInput = document.querySelector('.input')
  const validPin = '1234'
  if (pinInput.value === validPin) {
    document.querySelectorAll('.hidden').forEach(function (el) {
      el.classList.remove('hidden')
      document.querySelector('.regular-text').style.fontSize = '15px'
      document.querySelector('.regular-text').textContent =
        'AVAILABLE OPERATIONS'
      document.querySelector('.input').classList.add('hidden')
      document.querySelector('.btn-login').classList.add('hidden')
    })
    document.querySelector('.system-message').style.color = '#979797'
  } else {
    alert('Incorrect PIN')
    pinInput.value = ''
    pinInput.focus()
  }
})
// CANCEL
document.querySelector('.cancel-btn').addEventListener('click', function () {
  document.querySelectorAll('.hidden').forEach(function (el) {
    el.classList.remove('hidden')
    document.querySelector('.btn-account').classList.add('hidden')
    document.querySelector('.system-message').classList.add('hidden')
  })
  document.querySelector('.system-message').style.color = '#979797'
})
// DEPOSIT
let sum = 0
document.querySelector('.deposit-btn').addEventListener('click', function () {
  let amount = Number(prompt('What is the amount you want to deposit?'))
  if (amount && amount >= 0) {
    sum += amount
    document.querySelector(
      '.system-message'
    ).textContent = ` ${amount} EUR DEPOSITED. AVAILABLE BALANCE: ${sum} EUR.`
    document.querySelector('.system-message').style.color = '#979797'
  } else if (amount < 0) {
    alert('Invalid amount. Please try again.')
  }
})
//WITHDROW
document.querySelector('.withdraw-btn').addEventListener('click', function () {
  let amount = Number(prompt('What is the amount you want to withdraw?'))
  if (amount && amount >= 0 && amount <= sum) {
    sum -= amount
    document.querySelector(
      '.system-message'
    ).textContent = ` ${amount} EUR WITHDRAW. AVAILABLE BALANCE: ${sum} EUR`
    document.querySelector('.system-message').style.color = '#979797'
  } else if (amount < 0) {
    alert('Invalid amount. Please try again.')
  } else if (amount > sum) {
    document.querySelector('.system-message').style.color = 'red'
    document.querySelector('.system-message').textContent = 'INSUFFICIENT FUNDS'
  }
})
//BALANCE
document.querySelector('.balance-btn').addEventListener('click', function () {
  document.querySelector(
    '.system-message'
  ).textContent = `AVAILABLE BALANCE: ${sum} EUR.`
  document.querySelector('.system-message').style.color = '#979797'
})

