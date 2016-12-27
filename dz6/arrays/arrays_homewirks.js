/*1 задание

Из массива arr выведите строку которая будет равна "Мама мыла раму" используя встроенные методы массива 
(если есть лишние елементы в массиве их нужно удалить!):

var arr = ["у", "м", "а", "р", " ", "а", "л", "ы", "м", 5, " ", "а", "м", "а", "М", 1];
*/

var arr = ["у", "м", "а", "р", " ", "а", "л", "ы", "м", 5, " ", "а", "м", "а", "М", 1];
arr.reverse().shift();
arr.splice(5,1);
arr.join('');
arr;



/*
2 задание

Палиндром - это строка которая читается с обоих сторон одинаково. 
Например: Анна, оно, А роза упала на лапу Азора.

Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того 
является ли строка палиндромом или нет.

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
*/

function isPal(string)
{	
	var result = true;
	var stringCopy = [];

	// make a copy of 'string' as array, but without spaces;
	for(var i = 0, strLen = string.length; i < strLen; i ++)
	{
		if(string[i] !== ' ') stringCopy.push(string[i]);
	}

	//make 'stringCopy' become a string, and without upperCases
	stringCopy = stringCopy.join('');
	stringCopy = stringCopy.toLowerCase();
	
	//checking if prepared 'stringCopy' is an annogram
	for(var j = 0, strLen = stringCopy.length; j < strLen && result == true; j++)
	{
	    if(stringCopy[j] !== stringCopy[strLen - 1 - j])	result = false;
		
	}
	return result;
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false



/*
3 задание

Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:

воз - зов, киборг - гробик, корсет - костер - сектор,

Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
*/

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arr)
{
	arrLen = arr.length;
	var arrPrepared = [];
	var arrISorted;
	var valuesAnnogramed = [];
	var annogrammedString = '';
	var annogrammedStringLeft = '';
	var annogrammedStringRight = '';

	//getting the new array with all lower ases
	for(var i = 0; i < arrLen; i++)
	{
		arrPrepared.push(arr[i].toLowerCase());
	}
	
	//splitting all strings to arrays in new prepared array
	for(var j = 0; j < arrLen; j++)
	{
		arrPrepared[j] = arrPrepared[j].split('');
	}
	
	//sorting the values inside the arrays of new prepaed array
	//and join them back together
	for(var k = 0; k < arrLen; k++)
	{
		arrPrepared[k] = arrPrepared[k].sort();
		arrPrepared[k] = arrPrepared[k].join('');
	}
	
	//comparring the entries and getting the annogrammed pairs
	for(var l = 0; l < arrLen; l++)
	{
		for(var m = l+1; m < arrLen; m++)
		{
			if (arrPrepared[l] == arrPrepared[m]) valuesAnnogramed.push([l, m]);
			//what to do if values are repeated over 2 times?
		}
	}

	//creating the string of compared values
	for(var n = 0, valAnnogrLen = valuesAnnogramed.length; n < valAnnogrLen; n++)
	{	
		//если элемент последний - запятая в конце не нужна
		if (n == valAnnogrLen - 1)
		{
			annogrammedStringLeft += arr[valuesAnnogramed[n][0]];
			annogrammedStringRight += arr[valuesAnnogramed[n][1]];
		}
		else
		{
			annogrammedStringLeft += arr[valuesAnnogramed[n][0]] + ', ';
			annogrammedStringRight += arr[valuesAnnogramed[n][1]] + ', ';
		}
	}

	annogrammedString = annogrammedStringLeft + ' = ' + annogrammedStringRight;
	return annogrammedString;
}

anClean(arr);



/*
4 задание

Создайте программу которая соеденит массив в строку 
и поменяет местами и поменяет порядок следования слов в массиве:

var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];
*/

var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];
arr = arr.reverse();
arr = arr.split(', ');



/*
5 задание

10.1 Найти сумму целых чисел от 1 до 100
*/
var sum = 0;
for (var i = 1; i<=100; i++)
{
	sum += i;
}



/*
10.2 Найти сумму четных чисел от 0 до 100.
*/
var sumEven = 0;
for (var i = 1; i<=100; i++)
{
	if (i%2 ==0) sumEven += i;
}



/*
6 задание

Напишите функцию callMe которая будет принимать 3 аругумента, 
это будут цыфры, потом она будет суммировать их и выводить на екран результат их суммы!

Если в нее передели не числа то она должна выводить сообщение об ошибке в консоль и возвращать null; 
(вывод ошибки в консоль осуществялется через console.error("Тут текст ошибки") )
*/

function callMe(val1, val2, val3)
{
	var result;

	//check if val1 is a number
	for(var i = 0, val1Len = val1.length; i < val1Len; i++)
	{
		if(val1[i] != +val1[i])
		{
			console.error('Value #1 is not a number');
			return null;
		}
	}

	//check if val2 is a number
	for(var j = 0, val2Len = val2.length; j < val2Len; j++)
	{
		if(val2[j] != +val2[j])
		{
			console.error('Value #2 is not a number');
			return null;
		}
	}

	//check if val3 is a number
	for(var k = 0, val3Len = val3.length; k < val3Len; k++)
	{
		if(val3[k] != +val3[k])
		{
			console.error('Value #3 is not a number');
			return null;
		}
	}
	result = +val1 + +val2 + +val3;
	return result;
}

alert(callMe(prompt('Enter value #1'), prompt('Enter value #2'), prompt('Enter value #3')));
//консолька выдает только первое перправильное вхождение
//если надо - без проблем могу написать так чтобы консолька проверяла все
//но тогда потеряется изящьность с return null - катапульта из фунцкии



/*
7 задание

Напишите функцию callMeAgain которая будет принимать 1 аргумент, который будет массивом. 
Она должна возвращать массив соедененный через запятые и отсортированный по алфавиту (Array.join(','));
*/

function callMeAgain(array)
{
	//check if intered data is an array
	if(Array.isArray[array]) return 'you data is not an array';

	array.sort();
	array = array.join(', ');
	return array;
}

console.log(callMeAgain([a,t,d,g,r,s,d,g,]));