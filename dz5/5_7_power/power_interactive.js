var numPrompted = prompt('enter the value of Number');
var powPrompted = prompt('enter the value of Power');
var printresult;

function power(num, pow)
{
	if(pow>1) return num * power(num, pow-1);
	else return num;
}

//надо сравнить зщначение на не число
if (numPrompted == 0) 
{
	printresult = 'Any power of zero makes no sence';
	document.write('<h3>' + printResult + '</h3>');
	alert(printResult);
}
else if (numPrompted == 1)
{
	printResult = 'Any power of 1 is 1';
	document.write('<h3>' + printResult + '</h3>');
	alert(printResult);
}
else if (+powPrompted <0)
{
	printResult = "we don't play this if power is less than zero"
	document.write('<h3>' + printResult + '</h3>');
	alert(printResult);
}
else if (+powPrompted == 0)
{
	printResult = "any number in power of zero equals 1"
	document.write('<h3>' + printResult + '</h3>');
	alert(printResult);
}
else 
{
	printResult = power(numPrompted, powPrompted);
	document.write('<h3>' + printResult + '</h3>');
	alert(printResult);
}
