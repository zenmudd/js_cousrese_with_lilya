/*
ДЗ 5:
https://github.com/kl2karpenko/BA_FE_1/blob/master/JS/1-start/practical-tasks/recursion-reference.md

					1 task

Factorial

Write a JavaScript program to calculate the factorial of a number. 
In mathematics, the factorial of a non-negative integer n, denoted by n!, 
is the product of all positive integers less than or equal to n. 
For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(x) {
    // some code
}

factorial(6) // 720
factorial(3) // 6
*/

function factorial(number)
{
	if(number>1)
	{
		return number * factorial(number-1);
	}else
	{
		return number;
	}

}

factorial(5);


/*
2 task

Sum of array

Write a JavaScript program to compute the sum of an array of integers. Go to the editor

function sumOfArray(array) {
    // some code
}

sumOfArray([1,2,3]) // 6
sumOfArray([2,3,6]) // 11

Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21
*/

function sumOfArray(array)
{
	var arraySum=0;

	for (var i=0, arrayLength = array.length; i<arrayLength; i++)
	{
		arraySum += array[i];
		//console.log arraysum;
	}

	return arraySum;
}

var array = [1, 2, 3, 4, 5, 6];
sumOfArray(array);



/*
3 task

Recursion

Write a function that returns a power of a given number 
!important: it should check if the numbers is right ( the pow should be positive)

function pow(number, y) {
    // some code
}

pow(2, 2) // 4
pow(3, 2) // 9
pow(6, 4) // 1296
*/

function pow(number, power)
{
	//if(power == 0) return 1;  // как вернуть 1 есть степень 0, учитывая что далее рекурсия?
	if(number == 0) return 0; 
	if(!number>0 || !power >0) return 'please check your data';
	{	
		if(power!=1)
		{
			return number * pow(number, power-1);
		}else
		{
			return number;
		} 
	}
}

pow(2, 2)
pow(3, 2)
pow(6, 4)



/*
4 task

Passing value by value

4.1

var t = {
    y: 9
};

var number = t.y;

number += 5;

console.log(t.y, number); // ?


//значение 'y' не поменяется, значение 'number' возрастет



4.2

var t = {
    y: [1, 3, 5, 7]
};

var number = t.y[2];

for(var i = 0, len = t.y.length; i < len; i++) {
    t.y[i]++;
}

console.log(number); // ?

//был уверен что 9. не понял тут





4.3

var t = 9;

var obj = {
    number: t
};

obj.number++;

console.log(obj.number, t);

// t не изменится, obj.number изментися


*/

/*5 task

Create function that will create new array with a pull numbers 
from and to given numbers with the given interval, 
!important: it should check if the numbers is right (from has to be less that to)

function createRangeArrayWithNumbers(from, to, interval) {
    // some code
}

createRangeArrayWithNumbers(2, 2, false) // false ( from has to be less that to )
createRangeArrayWithNumbers(2, 5, 1) // [2, 3, 4, 5]
createRangeArrayWithNumbers(-1, 3, 2) // [-1, 1, 3]




//makes no sence to me
*/