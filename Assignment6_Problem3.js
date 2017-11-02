/*  Henry Song In Cho, Fall 2017, Santa Monica College, CS81, 959323
    Assignment 6, Problem 3

 */

//  Task:  Instantiating object through constructor, and then pass object and property to function
//         return true if property belongs to Object.

//  Function Definition, that receives Object and Property as arguments, and use special feature in
//  JavaScript to give boolean value whether property exists in the Object.

function checkGivenProperty(Obj,Prop)
{
    return hasOwnProperty.call(Obj,Prop);
}

//  Constructor to instantiate the object.
function office(first,last,dept,role,cubicle,phone,email)
{
    this.firstName = first;
    this.lastName = last;
    this.dept = dept;
    this.role = role;
    this.cubicle = cubicle;
    this.phone = phone;
    this.email = email;
}


//  Creating object through the instantiate the object.
var KimSoon = new office("Soon","Kim","IT","MSCE","G-8","1234567890","kimsoon@smc.edu");

//  Creating enumerable property that is not property of object instantiated by the constructor.
Object.prototype.contract = "non-eligible";
Object.prototype.none = "eagle";

//  Going through all the enumerable properties in the object, whether real or fictitious.
for(prop in KimSoon)
{
    console.log(prop);
    //If outputted property is fictitious, the following code will output false.
    console.log(checkGivenProperty(KimSoon,prop));
}

//console.log(checkGivenProperty(KimSoon,contract));