// Challenge # 1:

var myBoolean = true;
var mystring = 'hello world';
var firstnumber = 20;
var secondnumber = 40;
secondnumber = 80;
console.log(secondnumber)
var myArray = [myBoolean , mystring];
var sumproperty = firstnumber + secondnumber;
console.log(sumproperty)
var myobj = {firstproperty : myArray , Secondproperty : sumproperty};
console.log(myobj)
console.log(myobj.Secondproperty)
console.log(myobj.firstproperty[1])