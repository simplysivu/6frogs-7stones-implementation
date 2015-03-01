	var a = new Array('1', '2', '3','4', '_', 'A', 'B', 'C','D');
	var itemnum = 0;
	var al = Math.floor(a.length / 2);
	var solu = new Array();
	var stepNum=0;
	function startUp() {
		display();
		var blank = al;
		for ( var i = 0; i < (a.length); i++) {
			if (i < al) {
				if (i % 2 == 0) {
					blank = findBlank();
					rightMove(blank, i);
				} else {
					blank = findBlank();
					leftMove(blank, i);
				}

			} else if (i == al) {
				if (Math.floor((al) % 2) == 0) {
					blank = findBlank();
					rightMove(blank, i);
				} else {
					blank = findBlank();
					leftMove(blank, i);
				}
			} else if (i > al) {
				if (i % 2 == 0) {
					blank = findBlank();
					rightMove(blank, i);
				} else {
					blank = findBlank();
					leftMove(blank, i);
				}
			}
		//	document.write("<br>");
		}
		//alert("hai");

// 		for ( var i = 0; i < Math.floor(solu.length); i++) {
			
// 			for ( var j = 0; j < Math.floor(a.length); j++)
// 				document.write(solu[i][j]);
			
// 			document.write("<br>");

// 		}

	}

	function rightMove(pos, i) {
		if (i < al) {
			for ( var k = 0; k <= i; k++) {

				if (k == i) {
					swap(pos - 1, pos);
				} else
					swap(pos - 2, pos);
				pos = findBlank();
				display();
			}
		} else if (i == al) {
			for ( var k = 0; k < i; k++) {

				swap(pos - 2, pos);
				pos = findBlank();
				display();
			}
		} else if (i > al) {
			for ( var k = i; k < a.length; k++) {

				if (k == i) {
					swap(pos - 1, pos);
				} else
					swap(pos - 2, pos);
				pos = findBlank();
				display();
			}
		}
	}

	function leftMove(pos, i) {

		if (i < al) {
			for ( var k = 0; k <= i; k++) {

				if (k == i)
					swap(pos, pos + 1);
				else
					swap(pos + 2, pos);
				pos = findBlank();
				display();
			}
		} else if (i == al) {
			for ( var k = 0; k < i; k++) {

				swap(pos + 2, pos);
				pos = findBlank();
				display();
			}
		} else if (i > al) {
			for ( var k = i; k < a.length; k++) {

				if (k == i)
					swap(pos, pos + 1);
				else
					swap(pos + 2, pos);
				pos = findBlank();
				display();
			}
		}
	}

	function swap(pos1, pos2) {
		var temp;
		temp = a[pos1];
		a[pos1] = a[pos2];
		a[pos2] = temp;

	}

	function findBlank() {
		var j = 0;
		for (j = 0; j < a.length - 1; j++)
			if (a[j] == '_') {
				break;
			}
		return j;
	}

	function display() {

 	/*	document.write("</br>");
 		for ( var l = 0; l < a.length * 2; l++) {
 			document.write("-");
 		}

 		document.write("</br>");
 		for ( var l = 0; l < a.length; l++) {
 			document.write(a[l]);
 			document.write("|");
 		}
 		document.write("</br>");
 		for ( var l = 0; l < a.length * 2; l++) {
 			document.write("-");
		} */
		solu[itemnum]=new Array(a.length);
		for(var l=0 ; l< Math.floor(a.length);l++)
			solu[itemnum][l]=a[l];
		itemnum=itemnum+1;
	}
	
	function nextStep()
	{
		if(stepNum>((Math.floor(a.length/2)+1)*(Math.floor(a.length/2)+1))-1)
		{
		alert("Puzzel solved  \n Click Reset");
		return;
		}
		for(var i=0;i<a.length;i++){
			
			var imgnum=solu[stepNum][i];
		
			document.getElementById(i).innerHTML="<img src='../images/"+imgnum+".jpg' width='125' height='125'/>";
			
		}
			
	stepNum=stepNum+1;
	}

	function startAgain()
	{
	stepNum=0;
	nextStep();
	
	}
