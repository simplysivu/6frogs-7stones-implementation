var a = new Array('1', '2', '3','4', '_', 'A', 'B', 'C','D');
var solution=new Array('A','B','C','D','_','1','2','3','4');
function move(item)
{
	
	if(a.toString()==solution.toString())
	{
	alert("Game Over..\nYipee!! You won");
	return;
	}
	var blpos=searchItem('_');
	var itempos=searchItem(item);
	var diff=blpos-itempos;
	if(diff>2 || diff<-2)
	{
	alert("invalid move");
	return;
	}
	
	
	if(isNaN(item)==true)
	{
	   if(blpos>=itempos)
	   {
	   alert("invalid move");
	   return;
	   }
	   else
	   {
	   swap(blpos,itempos);
	   }
	}
	else
	{
	if(blpos<=itempos)
	   {
	   alert("invalid move");
	   return;
	   }
	   else
	   {
	   swap(blpos,itempos);
	   }
	}
	display();
}
function searchItem(item) {
		var j = 0;
		for (j = 0; j < a.length - 1; j++)
			if (a[j] == item) {
				break;
			}
		return j;
}

function swap(pos1, pos2) {
		var temp;
		temp = a[pos1];
		a[pos1] = a[pos2];
		a[pos2] = temp;
	}

function display()
{
	for(var i=0;i<a.length;i++){

		document.getElementById(i).innerHTML="<img src='../images/"+a[i]+".jpg' width='125' height='125' onclick=\"move('"+a[i]+"')\"/>";
	
		}
	if(a.toString()==solution.toString())
	{
	alert("Yipee!! You won");
	}
}
function startAgain()
{
a = new Array('1', '2', '3','4', '_', 'A', 'B', 'C','D');
display();
}