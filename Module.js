//Module.js

//Program  to understand the basics of Node.js using modules.

//Function to Print Date
exports.myDate =function()
{
    return Date();
}

//Function to print Date
exports.myMsg = function()
{
    return "Hellloo!!";
}

//Function to Check whether the given string is a Plindrome
exports.Palindrome = function(str)
{
    var rev="";
    temp = str.toString()
    for(var i=temp.length-1;i>=0;i--)
       { rev+=temp[i];}
    if(temp.toLowerCase() == rev.toLowerCase())
    {
        return (temp+" is a Plindrome");
    }
    else
    {
        return (temp+" is not a Plindrome");
    }
}

//Function to check whether the give number is an armstrong number
exports.Armstrong = function(num)
{
    var sum = 0, temp = num, digit;
    while(temp!= 0)
    {
        digit = temp % 10;
        sum += Math.pow(digit, 3);
        temp = Math.floor(temp / 10);
    }
    if(num == sum)
    {
        return (num+" is an Armstrong Number");
    }
    else
    {
        return (num+" is not an Armstrong Number");
    }
}

//Function to find sum of digits of a given number
exports.SumOfDigits = function(num)
{
    temp = num;
    sum = 0;
    while(temp > 0)
    {
        sum +=temp%10;
        temp = parseInt(temp/10);
    }
    return(" Sum of Digits of the Number "+ num + " is: "+ sum);
}

//Function to print Factorial of a number
exports.Factorial = function(num)
{
    fact=1;
    if(num == 1)
    {
        return fact;
    }
    else
    {
        for(i=1;i<=num;i++)
        {
            fact *= i;
        }
        return fact;
    }
}


//useModule.js

var modules = require('./Module.js');

console.log(modules.myMsg());
console.log("***Date***");
console.log(modules.myDate());
console.log("***Palindrome***");
console.log(modules.Palindrome("atta"));
console.log("***Armstrong***");
console.log(modules.Armstrong(381));
console.log("***Sum of Digits***");
console.log(modules.SumOfDigits(341));

console.log("***Factorial***");
console.log("The factorial of 6 is "+modules.Factorial(6));


