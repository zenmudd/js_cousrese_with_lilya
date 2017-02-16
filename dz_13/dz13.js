//1 task
//Дана строка 'aaa@bbb@ccc@ddd@ggg@www@'. 
//Найдите и замените все буквы находящиеся между символами "@ ... @" на пробелы.

var str = 'aaa@bbb@ccc@ddd@ggg@www@';
str = str.replace(/@[a-z]+?@/gi,' ');
str;

//?????


//2 task
//Запишите в replace выражение коотрое вернет следующий результат:

var date = "31/12/2025";
console.log(date.replace(/\//g, ' - ') ... ); // 31 - 12 - 2025


//3 task

var text = '<img src="a">   <img src="b" id="c"/>';
text = text.replace(/<img src="a"/, '<img src="a"/');

// now text = '<img src="a"/>   <img src="b" id="c"/>'




4 task
// a very raw beginning

function testNum(phoneNumber)
{
	var num = phoneNumber;
	regExp = /[\D]/g; ///[\D]+/g - what does + do here?
	num = num.replace(regExp, '');
	if (num.length == 8) console.log(true);
	else console.log(false);
}
testNum('30120626');
testNum('+30 12-06-26');
testNum('3456730120626');