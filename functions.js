function factRecursion(val)
{
	if(val === 1) return val;
	else
	{
		return val * factRecusion(val-1); 
	}	
}

//console.log(factRecusion(4));


function power(num, pow)
{
	if(pow === 1) return num;
	else
	{
		return num * power(num, pow-1);
	}	
}

//console.log(power(4,4));


function powerCycle(num, pow)
{
	var result = num;
	if(pow === 1) return result
	else
	{
		for(i=1; i<=pow; i++)
		{
			result = result*num;
		}
	return result;
	}
}

//console.log(powerCycle(4, 4));


function createRangeArrayWithNumbers (from, to, interval)
{	
	if(typeof(from) != 'number' && typeof(to) != 'number' && typeof(interval))
	{
		return 'Sorry bro, something is wrong here';
	}
	if(to <= from)
	{
		return 'you miscofigured something'
	}
	from = from || 1;
	to = to || 1;
	interval = interval || 1;
	var arr = [];
	for (i = from; i<=to; i+=interval)
	{
		arr.push(i);
	}
	return arr;
}

//console.log(createRangeArrayWithNumbers(2, 37));

function isPrime (num){
	var result = 'not a number';
	for(var i=1; i<num; i++)
	{
      var a = num-i;
      if (a !== 1)
      {
          if(num % a === 0)
          {     
            result = false;
          }
          else result = true;
      }  
  }		
	return result;
}

//console.log(isPrime('wer'));

function countPrimesSumInRange(numb)
{
	if (typeof(numb)!= "number") return "sorry bro, it's not a number";
	else if (numb <= 0) return "the number is lower or equals to zero";
	else
	{
		var primesSum = 0;
		for (var i = numb-1; i > 0; i--)
		{
			if(isPrime(numb-i)) primesSum += (numb-i);
		}
		return primesSum;
	}
}

//console.log(countPrimesSumInRange(5));