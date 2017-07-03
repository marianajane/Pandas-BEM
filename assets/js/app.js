var gothic1 = document.getElementById("gothic1");
var gothic2 = document.getElementById("gothic2");
var gothic3 = document.getElementById("gothic3");
var gothic4 = document.getElementById("gothic4");
var parr1 = document.getElementById("p1");
var parr2 = document.getElementById("p2");
var flag=true;
var flag2=true;
var botonCerrar = document.getElementsByClassName("close");

var array = Array.prototype.forEach.call(botonCerrar, function (elemento){
	// this.style.display = "none"
	elemento.addEventListener("click",eliminaPanda);
})

// botonCerrar[0].addEventListener("click", cerrarIm);

function eliminaPanda(){
	// alert("mata panadas x.x");
	this.style.display="none";
}

function mostrarPandas(){
	gothic1.style.display="block";
	gothic2.style.display="block";
	gothic3.style.display="block";
	gothic4.style.display="block";
}

//Botones intermedios y párrafos

var botonOrigen=document.getElementById("origenTxt");
var botonExtincion=document.getElementById("parodiaTxt");

botonOrigen.addEventListener("click", mostrarOcultarp1);
botonExtincion.addEventListener("click", mostrarOcultarp2);

function mostrarOcultarp1() {
	if (flag==true) {
		parr1.style.display = "none";
		flag=false;
	} else {
		parr1.style.display = "flex";
	}

}

function mostrarOcultarp2() {
	if (flag2==true) {
		parr2.style.display = "none";
		flag2=false;
	} else {
		parr2.style.display = "flex";
	}
}
