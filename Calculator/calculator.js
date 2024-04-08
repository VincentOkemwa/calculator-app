let numberOfFullstop = 0;
function calculate(a){
	
	let num = a.getAttribute("data-element");
	
	if(num === "."){
		numberOfFullstop++;
		
		if(numberOfFullstop >= 2){
			let b  = document.getElementById("inputField").value;
			let replacedContent = b.replaceAll(".", "").concat(".");
			document.getElementById("inputField").value = replacedContent;
		}
		else{
			document.getElementById("inputField").value += num;
		}
	}
	else{
		document.getElementById("inputField").value += num;
	}
}

document.getElementById("clear").addEventListener("click", clearResult);

function clearResult() {
	 document.getElementById("inputField").value = "";
	 document.getElementById("displayResult").value = "";
}

function giveResult(){

	if(document.getElementById("inputField").value == "" | document.getElementById("inputField").value == " "){
		document.getElementById("displayResult").value = "Enter something to calculate";
	}
	else{
	let result = eval( document.getElementById("inputField").value);
	 document.getElementById("displayResult").value = result;
	 document.getElementById("inputField").value = "";
	}
}


function deleteLastElement(){
	
	 document.getElementById("inputField").value = document.getElementById("inputField").value.slice(0, -1);;
}



