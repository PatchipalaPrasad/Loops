//Print Even number between 1 to 100
for(let i=0;i<=100;i++)
    {
       if(i%2==0)
       {
           console.log(i);
       }
    }
    
    //Print odd number between 1 to 100
    for(let i=0;i<=100;i++)
    {
       if(i%2!=0)
       {
           console.log(i);
       }
    }


//write a program to check number is prime or not
let isPrime=Number(prompt("Enter the number to check prime or not:"));
let count=1;
for(let i=2;i<=isPrime/2;i++)
{
    if(isPrime%i==0)
    {
        count++;
        break;
    }
} 
if(count==1)
{
        alert("Give number is Prime:"+isPrime);
}   

else
{
    alert("Give number is not Prime:"+isPrime);
}

// find a reverse of number
let num=parseInt(prompt("Enter the number to find reverse"));
sum=0;
while(num>0)
{
    rem=num%10;
    sum=sum*10+rem;
    num=parseInt(num/10);

}
alert("Revese of give number is:"+sum);

//  find number is polindrom or not
let num2=parseInt(prompt("Enter the number to find palindrom or Not"));
pali=num2;
sum=0;
while(num2>0)
{
    rem=num2%10;
    sum=sum*10+rem;
    num2=parseInt(num2/10);

}
if(pali==sum)
    {
        alert("Enter Number is palindrom")
    }
    else{
        alert("Enter Number not palindrom");
    }

