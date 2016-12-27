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

	for(var i = 0, strLen = string.length, lastCharIndex = strLen - 1 - i; i < strLen, result == true; i++)
	{
		if(string[i] !== string[lastCharIndex]) result = false;
	}
	return result;
}
alert(isPal('Anna')); // true
alert(isPal('А роза упала на лапу Азора')); //true
alert(isPal('Вася')); //false
alert(isPal('12321')); //true
alert(isPal('123212')); //false







function isPal(string)
{	
	var string = 'А роза упала на лапу Азора';
	var result = true;
	var stringCopy = [];
	var stringJoined;
	// create trhe string without spaces and capitals;
	for(var i = 0, strLen = string.length; i < strLen; i ++)
	{
		if(string[i] !== ' ') stringCopy.push(string[i]);
	}

	stringJoined = stringCopy.join('');
	stringJoined = stringJoined.toLowerCase();
	//console.log(stringJoined);

	//create the c
	for(var j = 0, strLen = stringJoined.length; j < strLen && result == true; j++)
	{
	    console.log(j, strLen - 1 - j, strLen)
	    console.log(stringJoined[j] + ' <> ' +  stringJoined[strLen - 1 - j]);
	    console.log(result, j);

		if(stringJoined[j] == stringJoined[strLen - 1 - j])	result = false;
		
	}
	return result;
}

console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Anna')); // true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false


//почему то возвразает всегда false
//если закоментировать строку if(stringJoined[j] !== string[strLen - 1 - j]) result = false; - тогда работает, но Я не могу тогда
//никак вернуть false усли условие не соблюдено
//и не могу понять почему вообще эта строка отрабатывает если ее условие не выполнено








var string = 'А роза упала на лапу Азора';
var result = true;
var stringCopy = [];
var stringJoined;
// create trhe string without spaces and capitals;
for(var i = 0, strLen = string.length; i < strLen; i ++)
{
	if(string[i] !== ' ') stringCopy.push(string[i]);
}

stringJoined = stringCopy.join('');
stringJoined = stringJoined.toLowerCase();
//console.log(stringJoined);

//create the c
for(var j = 0, strLen = stringJoined.length; j < strLen && result == true; j++)
{
    console.log(j, strLen - 1 - j, strLen)
    console.log(stringJoined[j] + ' <> ' +  stringJoined[strLen - 1 - j]);
    console.log(result, j);

	if(stringJoined[j] == stringJoined[strLen - 1 - j])	result = false;
	
}



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

	//getting the new array with all lower ases
	for(var i = 0; i < arrLen; i++)
	{
		arrPrepared.push(arr[i].toLowerCase());
	}
	
	//splitting all stings to arrays new prepared array
	for(var j = 0; j < arrLen; j++)
	{
		arrPrepared[j] = arrPrepared[j].split('');
	}
	//console.log(arrPrepared);

	//sorting the values inside the arrays of new prepaed array
	for(var k = 0; k < arrLen; k++)
	{
		arrPrepared[k] = arrPrepared[k].sort();
	}
	
	//comparring the enties and getting the annogrammed pairs
	for(var l = 0; l < arrLen; l++)
	{
		
	}
	
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





/*
7 задание

Напишите функцию callMeAgain которая будет принимать 1 аргумент, который будет массивом. 
Она должна возвращать массив соедененный через запятые и отсортированный по алфавиту (Array.join(','));




*/