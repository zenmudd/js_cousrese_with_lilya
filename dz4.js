		//ДЗ#2

//1 задание
//Написать функцию color(), которая будет генерировать случайный цвет в RGB формате.



function randomNumber(max, min)
{
	return Math.random() * (max - min) + min;
}

function randomRgbColor()
{
	return "rgb" + "(" + randomNumber(0,255) + ", " + randomNumber(0,255) + ", " + randomNumber(0,255) + ")" ;
}



//__________________________

//2 задание
//Напишите функцию, генерирующую массив с случайным количеством элементов вида «Товар N», 
//где N случайный номер товара. Выведите на экран количество товаров каждого вида.
		//???


//__________________________

//3 задание
//Вывести таблицу с цветом фона подобным шахматной доске. Код оформить в виде функции, 
//которая будет принимать три аргумента: 
//fcolor – первый цвет таблицы, 
//scolor – второй цвет ячеек таблицы, 
//contents – массив, содержимое которого может выводиться в таблице.
		//пока не трогал 


//___________________________

//4 задание
//Напишите функцию для создания таблицы размером NхM. 
//Такой, чтобы каждая ячейка заполнялась случайной буквой русского алфавита и случайным цветом фона 
//(для выполнения задания, воспользуйтесь методом random() объекта Math; 
//кроме того создайте массив в элементами – буквами алфавита)
		//подразберусь немного с html и сделаю



//____________________________


//5 задание
//the sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.
function isPrime (num)
{
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

console.log(countPrimesSumInRange(2000));

//_________________________________


//5 задание
//215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
//What is the sum of the digits of the number 21000?
		//no idea what this means