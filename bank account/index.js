let account = {
    name: "Elyorbek",
    surname: "Maxammadjonov",
    balance: 0

}

function showMenu() {
    console.log(`






        1) Show account balance
        2) Deposit
        3) Withdraw
        `)
}
function giveChoice() {
    let choice = prompt("what would you like to do?")
    if (choice === "1") {
        showBalance()
    }
    else if (choice === "2") {
        deposit()
    }
    else if (choice === "3") {
        withdraw()
    }
    else {
        alert("not a valid choice!")
    }
}
function showBalance() {
    console.log(`
        ${account.name}'s account balance is $${account.balance} 
        `);
    giveChoice()
}
function deposit() {
    let payload = +prompt("how much do you want to deposit?")
    account.balance = account.balance + payload
    console.log(`deposit successfull! deposited : $${payload} balance : $${account.balance}`);
    giveChoice()
}
function withdraw() {
    let payload = +prompt("how much do you want to withdraw?")
    if (account.balance >= payload) {
        account.balance = account.balance - payload
        console.log(`withdrawal succesfull! withdrawal : $${payload} balance : $${account.balance}`);
        
    }else {
        console.log(`not enough money to withdraw from the balance, current balance : $${account.balance}. attepmted withdrawal : $${payload}`);
        
        
    }
    giveChoice()
}
showMenu()
giveChoice()