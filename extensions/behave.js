/* EXPAND TO SEE DESCRIPTION OF THIS JS FILE!!
	whatever value does convertNumberOne has, should be computed automatically by convertNumberTwo
	of course, it depends on the choices made in unitNumberOne and unitNumberTwo
	regarding what unit is to be converted for the output in convertNumberTwo
*/
function convertMe()
{	
	var getUnitNumberOne = document.getElementById('unitNumberOne').value; // get the values from the HTML form
	var getUnitNumberTwo = document.getElementById('unitNumberTwo').value;
	var getNumberOne = document.getElementById('convertNumberOne').value;	
	validateNumberOne(getNumberOne); // validate if ever there's a need to pop up an error message
	/*if( b < 1.0 && b > Math.pow(10,-3) )
	{ b= b.toPrecision(4)}
	else if (b < Math.pow(10,-3))
	{
		b = b.toPrecision(6);
	}*/
	var finalResult;
	if (isNaN(getNumberOne) || getNumberOne === "")
		{ 
			finalResult =0; 
		}
	else
		{	
			finalResult = parseFloat(convertNumberOnetoNumberTwo(getUnitNumberOne, getUnitNumberTwo, getNumberOne));	
		}
	document.getElementById('convertNumberTwo').value= "" + finalResult; // output the final result
}	

function validateNumberOne(a) 
{ // check if entered data in convertNumberOne is correct. this is for the error message pop up only
	try
		{
			if(Number(a) || a == "") 
				{	throw "";	}
			else if(isNaN(a)) 
				{		throw "Only Numbers can be entered!";	}
			else	
				{	a == Number(a);	  }
		}
	catch(err)
		{
			document.getElementById('errMsg').style.color= "red";
			document.getElementById('errMsg').innerHTML= err;
		}
}

function convertNumberOnetoNumberTwo (a, b, c)
{
	var constHourtoMin = 60.00; var constMintoSec = 60.00;
	switch(a)
	{
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
				c *= ((constHourtoMin*constMintoSec) * Math.pow(10,3));
			}
		else if(b == "usec")
			{
				c *= ((constHourtoMin*constMintoSec) * Math.pow(10,6));
			}
		else if(b == "nsec")
			{
				c *= ((constHourtoMin*constMintoSec) * Math.pow(10,9));
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
				c *= (constMintoSec * Math.pow(10,3));
			}
		else if(b == "usec")
			{
				c *= (constMintoSec * Math.pow(10,6));
			}
		else if(b == "nsec")
			{
				c *= (constMintoSec * Math.pow(10,9));
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
				c *=  Math.pow(10,3);
			}
		else if(b == "usec")
			{
				c *=  Math.pow(10,6);
			}
		else if(b == "nsec")
			{
				c *=  Math.pow(10,9);
			}
		else
			{
				c = c;
			}
	break;
	case "msec":
		if (b == "hrs")
			{
				c /= ((constHourtoMin * constMintoSec) * Math.pow(10,3)); 
			}
		else if(b == "min")
			{
				c /= (constMintoSec * Math.pow(10,3));
			}
		else if(b == "sec")
			{
				c /=  Math.pow(10,3);
			}
		else if(b == "usec")
			{
				c /=  (Math.pow(10,3) / Math.pow(10,6));
			}
		else if(b == "nsec")
			{
				c /=  (Math.pow(10,3) / Math.pow(10,9));
			}
		else
			{
				c = c;
			}
	break;
	case "usec":
		if (b == "hrs")
			{
				c /= ((constHourtoMin * constMintoSec) * Math.pow(10,6)); 
			}
		else if(b == "min")
			{
				c /= (constMintoSec * Math.pow(10,6));
			}
		else if(b == "sec")
			{
				c /=  Math.pow(10,6);
			}
		else if(b == "msec")
			{
				c /=  (Math.pow(10,6) / Math.pow(10,3));
			}
		else if(b == "nsec")
			{
				c /=  (Math.pow(10,6) / Math.pow(10,9));
			}
		else
			{
				c = c;
			}
	break;
	case "nsec":
		if (b == "hrs")
			{
				c /= ((constHourtoMin * constMintoSec) * Math.pow(10,9)); 
			}
		else if(b == "min")
			{
				c /= (constMintoSec * Math.pow(10,9));
			}
		else if(b == "sec")
			{
				c /=  Math.pow(10,9);
			}
		else if(b == "msec")
			{
				c /=  (Math.pow(10,9) / Math.pow(10,3));
			}
		else if(b == "usec")
			{
				c /=  (Math.pow(10,9) / Math.pow(10,6));
			}
		else
			{
				c = c;
			}
	break;
	}		
		return c;
}
