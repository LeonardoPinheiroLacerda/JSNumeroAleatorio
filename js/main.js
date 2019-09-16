var play = false;
var rand;
var uinput;
var plays = 0;
var t = "Tentativas:";
var bol = false;

function iniciar()
{
	if(play == false){
		rand = Math.floor(Math.random() * 100)+1;
		play = true;
		jogar();
	}
	else{
		jogar();
	}
	
}

function jogar()
{
	uinput = document.getElementById("rando").value;
	if(uinput > 100){
		document.getElementById("rando").value = "";		
		tries();

		document.getElementById("saida").innerHTML = "Maior que 100!";
		document.getElementById("saida").style.background="red";

		document.getElementById("tr").innerHTML = t;
		document.getElementById("tr").style.background="yellow";
		plays +=1;
	}
	else if(uinput < 1){
		document.getElementById("rando").value = "";		
		tries();

		document.getElementById("saida").innerHTML = "Menor que 1!";
		document.getElementById("saida").style.background="red";

		document.getElementById("tr").innerHTML = t;
		document.getElementById("tr").style.background="yellow";
		plays+=1;
	}	
	else if(uinput != ""){
		document.getElementById("rando").value = "";	
		checar();
	}	
}
function checar()
{
	if (rand > uinput)
	{
		tries();
		document.getElementById("saida").innerHTML = "Mais Alto!";
		document.getElementById("saida").style.background="red";

		document.getElementById("tr").innerHTML = t;
		document.getElementById("tr").style.background="yellow";
		plays +=1;

		document.getElementById("rando").focus();

	}
	else if(rand < uinput)
	{
		tries();		
		document.getElementById("saida").innerHTML = "Mais Baixo!";
		document.getElementById("saida").style.background="red";

		document.getElementById("tr").innerHTML = t;
		document.getElementById("tr").style.background="yellow";
		plays +=1;

		document.getElementById("rando").focus();
	}
	else
	{
		tries();
		plays +=1;
		document.getElementById("saida").innerHTML = "Acertou depois de " + plays + " tentativas!";
		document.getElementById("saida").style.background="#80FF00";

		document.getElementById("tr").innerHTML = t+".";
		document.getElementById("tr").style.background="yellow";

		document.getElementById("rando").disabled=true;
		document.getElementById("r").disabled=true;
		
		finalizar();
	}
}
function finalizar()
{
	var btn = document.createElement('button');
     	var lbl = document.createTextNode("Jogar novamente.");        
	btn.appendChild(lbl);   
	btn.id = "tempb";
	btn.onclick = function()
	{
		t = "Tentativas:";
		plays = 0;
		play = false;
		bol = false;
		document.getElementById("rando").disabled=false;
		document.getElementById("r").disabled=false;

		document.getElementById("saida").innerHTML = "";
		document.getElementById("tr").innerHTML = "";

		var element = document.getElementById("tempb");
		element.parentNode.removeChild(element);

		document.getElementById("rando").focus();

	}
	
	document.body.appendChild(btn); 
	btn.style.width="420px";
}
function tries()
{
	if (bol == false){
		t += " " + uinput;
		bol = true;
	}
	else{
		t += ", " + uinput;
	}
}