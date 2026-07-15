$(document).ready(function(){

// LOGIN

$("#loginBtn").click(function(){

let email=$("#email").val();

let password=$("#password").val();

if(email=="" || password==""){

$("#mensaje").html(

'<div class="alert alert-danger">Complete todos los campos</div>'

);

}else{

$("#mensaje").html(

'<div class="alert alert-success">Ingreso correcto</div>'

);

setTimeout(function(){

window.location.href="wallet.html";

},1000);

}

});

// BILLETERA

let saldo=0;

$("#depositBtn").click(function(){

let monto=Number($("#amount").val());

if(monto>0){

saldo=saldo+monto;

$("#balance").text(saldo);

$("#amount").val("");

}

});

$("#withdrawBtn").click(function(){

let monto=Number($("#amount").val());

if(monto<=0){

alert("Ingrese un monto válido");

}else if(monto>saldo){

alert("Saldo insuficiente");

}else{

saldo=saldo-monto;

$("#balance").text(saldo);

$("#amount").val("");

}

});

});