function sumOfPoweredNumberDigits(number, power)
{
	var poweredResult = number;
	var sumOfPoweredNumberDigits;
	var sumOfPoweredNumberDigitsLength;

	//создать проверку на number на корректность
	//создать проверку на power на корректность
	for(var i = 1; i < power; i++)
	{
		poweredResult += poweredResult * poweredResult;
	}
	String(poweredResult);
	sumOfPoweredNumberDigitsLength = poweredResult.length

	for(var j = 1; j < sumOfPoweredNumberDigitsLength; j++)
	{
		sumOfPoweredNumberDigits += poweredResult[i];
	}

	return poweredResult;
}

var printedResult = '<h4>' + sumOfPoweredNumberDigits(prompt('give me the number to power'), prompt('give ne the power value')) + '</h4>';
document.write(printedResult);