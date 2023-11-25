'use strict'
function btnSumar() {
    var val1 = document.getElementById('txtval1').value;
    var val2 = document.getElementById('txtval2').value;
    var suma, suma2 = 0;
   
    suma = parseInt(val1) + parseInt(val2);
    //console.log(suma);
    //suma2 = suma + "";
    document.form1.txtRes.value = suma;

}
//window.onload = btnSumar;