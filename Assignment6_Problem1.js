/*  Henry Song In Cho, Santa Monica College, Fall 2017, CS81, 959323
    Assignment 6, Problem 1
 */

//  Task:  Build app to test Constructor to initiate object, and prototype to add more properties and
//         methods to the object.

//  Constructor to initiate object.

function  Employee(first, last, ssn , eid, dept)
{
    this.firstName = first;
    this.lastName = last;
    this.ssn = ssn;
    this.eid = eid;
    this.dept = dept;
}

//  Prototype of Object to add default properties, and method.

Employee.prototype.ssn = "000-00-0000";
Employee.prototype.dept = "empty";
Employee.prototype.Roster = function()
{
    return this.firstName + " "+this.lastName+ " :  "+this.dept;
}

//  Creating objects through initiation of Constructor.
var eJohnDoe = new Employee("John","Doe","123-34-1234","001234","acct");
var eSallyRally = new Employee("Sally","Rally","123-34-1235","001235","hr");

//  Application of method
//  Output and test the default ssn of Employee prototype
console.log(Employee.prototype.ssn);
//  Output and test the default dept of Employee prototype
console.log(Employee.prototype.dept);
//  Output ssn of eJohnDoe Object.
console.log(eJohnDoe.ssn);
//  Output ssn of eSallyRally Object.
console.log(eSallyRally.ssn);
//  Output Roster() method of eJohnDoe
console.log(eJohnDoe.Roster());
//  Output Rosster() method of eSallyRally
console.log(eSallyRally.Roster());