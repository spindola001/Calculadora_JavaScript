var operacao = 0;
var novoNum = false;
var operacaoPend = "";

function press(num) {
	if (novoNum){
		document.calc.visor.value = num;
		novoNum = false;
	} 
	else {
		if (document.calc.visor.value == "0")
			document.calc.visor.value = num;
		else 
			document.calc.visor.value += num;
	}
}
function calculo(op) {
	if (document.calc.visor.value == ""){
		alert("Campo vazio, digite valores a serem calculados.");
		document.calc.visor.value = "0";
	}
	else{
		if (novoNum && operacaoPend != "=");
		else{ 
			novoNum = true;
			if ( '+' == operacaoPend )
					operacao += parseFloat(document.calc.visor.value);
					else if ( '-' == operacaoPend )
					operacao -= parseFloat(document.calc.visor.value);
					else if ( '/' == operacaoPend )
					operacao /= parseFloat(document.calc.visor.value);
					else if ( '*' == operacaoPend )
					operacao *= parseFloat(document.calc.visor.value);
				else
					operacao = parseFloat(document.calc.visor.value);
					document.calc.visor.value = operacao;
					operacaoPend = op;

		}
	}
}
function ponto(){
	var curVisor = document.calc.visor.value;
	if (novoNum){
		curVisor = "0.";
		novoNum = false;
	}
	else{
		if (curVisor.indexOf(".") == -1)
			curVisor += "."
	}
	document.calc.visor.value = curVisor;
}
function maisMenos(){
	var decr = document.calc.visor.value;
	if (calc.visor.value.indexOf('-') == 0){
		calc.visor.value = calc.visor.value.substr(1,12);
	}
	else{
		calc.visor.value = '-' + calc.visor.value;
	}
}
function raizQ (){
	var raiz = document.calc.visor.value;
	raiz = (Math.sqrt(raiz));
	var resultado = raiz;
	calc.visor.value = resultado;
}
/*function porcentagem(){
	var percent = document.calc.visor.value;
	if(('+-'.indexOf)>-1){
		calc.visor.value = "" + parseFloat((calc.visor.value * parseFloat)/100);

	}	
}*/
function limpa(){
	calc.visor.value = "";
}