//a) Function in Node js to sum two values
function add(x,y)
{
    return x+y;
}


function sub(x,y)
{
    return x-y;
}


function mul(x,y)
{
    return x*y;
}


function div(x,y)
{
    return x/y;
}


//b) Function in Node js to find sum of numbers between two values
function sumBtxy(x,y)
{
    sum=0;
    for(i=x;i<=y;i++)
        sum=sum+i;
    return sum;
}


//c) Function in Node js to find factorial of a number
function factorial(x)
{
    fact=1;
    if(x==1)
        return fact;
    else
    {
        for(i=1;i<=x;i++)
            fact=fact*i;
        return fact;
    } 
}


//d) Function in Node js to mimic functions of calculator ADD,SUBTRACT,etc
num1 = 10;
num2 = 20;
choice=6;
switch(choice)
{
    case 1 :
    console.log(num1+" + "+num2+" = "+add(num1,num2));
        break;
    case 2 :
    console.log(num1+" - "+num2+" = "+sub(num1,num2));
        break;
    case 3 :
    console.log(num1+" x "+num2+" = "+mul(num1,num2));
        break;
    case 4 :
    console.log(num1+" / "+num2+" = "+div(num1,num2));
        break;
    case 5 :
    console.log("Sum of numbers between "+num1+" and "+num2+" = "+sumBtxy(num1,num2));
        break;
    case 6 :
    console.log("Factorial of "+num1+" is : "+factorial(num1));
        break;      
}
