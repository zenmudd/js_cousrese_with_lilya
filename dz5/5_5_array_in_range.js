function createRangeArrayWithNumbers(from, to, interval) {
    if (from<to)
    {		
	    var arr = [];

	    for(var i = 0; from<=to; i++, from += interval)
	    {
	    	arr.push(from);
	    }
	    console.log(arr) ;    	
    }
    else console.log('false conditions, from has to be less that to');
}
createRangeArrayWithNumbers(2, 2, false) // false ( from has to be less that to )
createRangeArrayWithNumbers(2, 5, 1) // [2, 3, 4, 5]
createRangeArrayWithNumbers(-1, 3, 2) // [-1, 1, 3]

