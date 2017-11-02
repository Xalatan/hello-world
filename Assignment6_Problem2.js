/*  Henry Song In Cho, Fall 2017, Santa Monica College, CS81, 959323
    Assignment 6, Problem 2
 */

//  Task:  Write a Constructor and Prototype based function that transfer money to checking account if total balance
//         is greater than zero.

//  Constructor to create an object.
function BankAcct(acctNum, acctOwner, checkBalance, saveBalance, acctType)
{
    this.acctNum = acctNum;
    this.acctOwner = acctOwner;
    this.checkBalance = checkBalance;
    this.saveBalance = saveBalance;
    this.acctType = acctType;
}

//  Prototype method to withdraw money and deposit money to checking account.
BankAcct.prototype.checkTransfer = function(amount)
{
    if(amount + this.checkBalance > 0)
        this.checkBalance += amount;

    return this.checkBalance;
}

//  Creation of Object through the initiation of constructor.
var myFatherAccount = new BankAcct("123456789","John Doe",100,200,"checking");


//  Testing and outputting balance after withdrawing and depositing money to check account.
console.log(myFatherAccount.checkTransfer(-10));
console.log(myFatherAccount.checkTransfer(-30));
console.log(myFatherAccount.checkTransfer(-60));
console.log(myFatherAccount.checkTransfer(-59));
console.log(myFatherAccount.checkTransfer(2));