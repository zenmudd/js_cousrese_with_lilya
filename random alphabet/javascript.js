function randomNumber(max, min)
{
	return Math.random() * (max - min) + min;
}

function drawRandomAlphabetTable (trNumber, tdNumber)
{
	var table = "<table><tbody>";
	var alphabet = "abcdefjhijklmnopqrstuvwxyz";
	var alphabetArray = alphabet.split("");
	var alphabetArrayLength = alphabetArray.length;
	console.log(alphabetArray, alphabetArrayLength)

	for (var i = 1; i < trNumber; i++ )
	{
		table += "<tr>";
		for (var j = 1; j < tdNumber; j++)
		{
			table += "<td>" + alphabetArray[parseInt(randomNumber(0, alphabetArrayLength))] + "</td>"; 
		}

		table += "</tr>";
	}

	table += "</tbody></table>";
	document.write(table);
}

drawRandomAlphabetTable(prompt("tr number"), prompt("td number"));
