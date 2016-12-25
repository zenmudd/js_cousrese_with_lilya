var factorialNumber = (+prompt('enter the number here'));
var printResult;
function factorial(num)
{
	if (num > 1)
	{
		return num * factorial(num-1);
	}
	else
	{
		return num;
	}
}

//if (factorialNumber == "NaN") document.write('inputed value is not a number, sorry');
// *** проверить приходязее из промпта значение на число 

if (factorialNumber === 1 || factorialNumber == 2)
{
	printResult = 'factorial of 1 is always 1, factorial of 2 is alwayas 2'
	document.write('<h3>' + printResult + '</h3>');
	alert(printResult);
}
else if (factorialNumber <= 0) 
{
	printResult = 'the value is less or equal zero'
	document.write('<h3>' + printResult + '</h3>');
	alert(printResult);
}
else
{
	printResult = 'the reult is: ' + factorial(factorialNumber);
	document.write('<h3>' + printResult + '</h3>');
	alert(printResult);
}
