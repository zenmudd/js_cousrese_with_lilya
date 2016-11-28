myname = "global";
function func() {
    console.log(myname);
    var myname = "local";
    console.log(myname);
}
func();

	//undefined, так как myname заведена в функции но не определена
	//'local' по понятным причинам :)






function randomNumber(max, min)
{
	return Math.random() * (max - min) + min;
}

function randomRgbColor()
{
	ruturn "rgb" + "(" + randomNumber(0,255) + ", " + randomNumber(0,255) + ", " + randomNumber(0,255) + ")")
}
