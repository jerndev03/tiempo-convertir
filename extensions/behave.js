/* 
	whatever value does convertNumberOne has, should be computed automatically by convertNumberTwo
	of course, it depends on the choices made in unitNumberOne and unitNumberTwo
	regarding what unit is to be converted for the output in convertNumberTwo
*/
function x()
{
	//values from the HTML form	
	var getUnitNumberOne = document.getElementById('unitNumberOne').value;
	var getUnitNumberTwo = document.getElementById('unitNumberTwo').value;
	var getNumberOne = document.getElementById('convertNumberOne').value;	
	validateNumberOne(getNumberOne); 
	var b = parseFloat(convertNumberOnetoNumberTwo(getUnitNumberOne, getUnitNumberTwo, getNumberOne));
	if( b < 1.0 && b > Math.pow(10,-3) )
	{ b= b.toPrecision(4)}
	else if (b < Math.pow(10,-3))
	{
		b = b.toPrecision(6);
	}

	document.getElementById('convertNumberTwo').value= "" + b;
	
}	

function validateNumberOne(a) // check if entered data in convertNumberOne is correct
{
	try
	{
		if(Number(a) || a == "") throw "";
		if(isNaN(a)) throw "Only Numbers can be entered!";
		a == Number(a);
		
	}
	catch(err)
	{
		document.getElementById('errMsg').innerHTML= err;
	}
}

function convertNumberOnetoNumberTwo (a, b, c)
{
	var constHourtoMin = 60.00; var constMintoSec = 60.00;
	switch(a){
	case "hrs":
		if (b == "min")
		{
			c *= constHourtoMin; 
		}
		else if(b == "sec")
		{
			c *= (constHourtoMin*constMintoSec);
		}
		else if(b == "msec")
		{
			c *= ((constHourtoMin*constMintoSec) * 1000);
		}
		else
		{
			c = c;
		}
	break;
	case "min":
		if (b == "hrs")
		{
			c /= constHourtoMin; 
		}
		else if(b == "sec")
		{
			c *= constMintoSec;
		}
		else if(b == "msec")
		{
			c *= (constMintoSec * 1000);
		}
		else
		{
			c = c;
		}
	break;
	case "sec":
		if (b == "hrs")
		{
			c /= (constHourtoMin * constMintoSec); 
		}
		else if(b == "min")
		{
			c /= constMintoSec;
		}
		else if(b == "msec")
		{
			c *=  1000;
		}
		else
		{
			c = c;
		}
	break;
	case "msec":
		if (b == "hrs")
		{
			c /= ((constHourtoMin * constMintoSec) * 1000); 
		}
		else if(b == "min")
		{
			c /= (constMintoSec * 1000);
		}
		else if(b == "sec")
		{
			c /=  1000;
		}
		else
		{
			c = c;
		}
	break;
	}
		return c;
}
