//var table = document.createElement("table");


function drawTable (fcolor, scolor, trNumber, tdNumber)
{
	var table = "<table><tbody>";
	for (var i = 1; i < trNumber; i++ )
	{
		table += "<tr>";
		if ((i+2) %2 !== 0)
		{
			for (var j = 1; j < tdNumber; j++)
			{
				if ((j+2) %2 !== 0) table += "<td bgcolor=\"" + fcolor + "\"></td>";
				else table += "<td bgcolor=\"" + scolor + "\"></td>";
			}
		}
		else
		{
			for (var j = 1; j < tdNumber; j++)
			{
				if ((j+2) %2 == 0) table += "<td bgcolor=\"" + fcolor + "\"></td>";
				else table += "<td bgcolor=\"" + scolor + "\"></td>";
			}
		}
		table += "</tr>";
	}
	table += "</tbody></table>";
	document.write(table);
}

drawTable(prompt("first color"), prompt("second color"), prompt("number of tr"), prompt("number of td"));
