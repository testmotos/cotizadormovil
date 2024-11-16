window.onload = inicio;

function inicio(){

    //document.getElementById("NvaCot").onclick=limpiar;
    document.getElementById("numero1").focus();
    document.getElementById("NvaCot").addEventListener("click", limpiar)
    document.getElementById("myBtnPrima").addEventListener("click", calprima)
    document.getElementById("myBtnPrimin").addEventListener("click", calprimin)

    document.getElementById("numero1").addEventListener("keydown",teclaEnter01);
    document.getElementById("numero2").addEventListener("keydown",teclaEnter02);

    function teclaEnter01(e){
        (e.key==="Enter") && calprima()
    }

    function teclaEnter02(e){
    (e.key==="Enter") && calprimin()
    }
}

function calprima(){

    let num1, prima, precio;
    
    num1 = document.getElementById("numero1").value;
    precio = (parseFloat (num1)).toFixed(2);

    if (num1 =="") {

        //alert("Ingrese precio de la motocicleta para calcular prima.....!")
        document.getElementById("numero1").focus();

    } else if (num1 <= "0") {

        //alert("El precio de la motocicleta debe ser mayor a cero para poder calcular prima.....!")
        document.getElementById("numero1").value = "";
        document.getElementById("numero1").focus();

    } else {

        prima = (parseFloat(num1) * 0.35).toFixed(2);
    
        document.getElementById("lblprima").innerHTML= "La prima es de:";
        document.getElementById("lbltoprima1").innerHTML= "$" + prima;
        document.getElementById("lblsaldo").innerHTML= "Saldo $0.00";
        document.getElementById("lblpreciom").innerHTML= "Precio de la motocicleta $" + precio;
        document.getElementById("numero2").focus();
    }  
}

function calprimin(){
    let num1, num2, primin, saldo, saldo1, precio, resctres, resctrest, rescseis, rescdoce, rescdocho, rescvcuatro;
    
    num1 = document.getElementById('numero1').value;
    num2 = document.getElementById('numero2').value;
    precio = (parseFloat (num1)).toFixed(2);

    saldo1 = parseFloat(num1) - parseFloat(num2)

    if (num1 == "" || num1 <= "0") {
        
      //alert("Para calcular prima minima ingrese el precio de la motocicleta.....!")
      document.getElementById("numero2").value = "";
      document.getElementById("numero1").value = "";
      document.getElementById("numero1").focus();
        
    } else if (num2 =="") {

        //alert("Ingrese el valor de una prima minima.....!")
        document.getElementById("numero2").focus();

    } else if (num2 < "0") {

        //alert("La prima minima no puede ser menor a cero.....!")
        document.getElementById("numero2").value = "";
        document.getElementById("numero2").focus();

    } else if (saldo1 <= "0") {

        //alert("Su saldo es igual o menor a cero no se puede realizar un plan de pago.....!")
        document.getElementById("numero2").focus();
    
    } else {

        primin = (parseFloat(num2) + 10).toFixed(2);
        saldo = (parseFloat(num1) - parseFloat(num2)).toFixed(2);

        document.getElementById("lblprima").innerHTML= "Prima minima + papeleo:";
        document.getElementById("lbltoprima1").innerHTML= "$" + primin;
        document.getElementById("lblsaldo").innerHTML= "Saldo $" + saldo;
        document.getElementById("lblpreciom").innerHTML= "Precio de la motocicleta $" + precio;

        resctres = (saldo1 / 3).toFixed(2)
        //resctrest = ((saldo1 + 65) / 3).toFixed(2)
        rescseis = (((saldo1 * 0.04) * 6 + saldo1) / 6).toFixed(2)
        rescdoce = (((saldo1 * 0.04) * 12 + saldo1) / 12).toFixed(2)
        rescdocho = (((saldo1 * 0.04) * 18 + saldo1) / 18).toFixed(2)
        rescvcuatro = (((saldo1 * 0.04) * 24 + saldo1) / 24).toFixed(2)

        document.getElementById("lbl03_03").innerHTML= "03 Cuotas sin intereses de $" + resctres;
        //document.getElementById("lbl03t_03t").innerHTML= "03 cuotas s/i + traspaso de $" + resctrest;
        document.getElementById("lbl06_06").innerHTML= "06 Cuotas de $" + rescseis;
        document.getElementById("lbl12_12").innerHTML= "12 Cuotas de $" + rescdoce;
        document.getElementById("lbl18_18").innerHTML= "18 Cuotas de $" + rescdocho;
        document.getElementById("lbl24_24").innerHTML= "24 Cuotas de $" + rescvcuatro;

        //document.getElementById("NvaCot").focus(0;
        //document.querySelector(".btnnvacot").click();
    }
}

function limpiar(){
    
    document.getElementById("lblprima").innerHTML= "La prima es de:";
    document.getElementById("lbltoprima1").innerHTML= "$0.00";
    document.getElementById("lblsaldo").innerHTML= "Saldo $0.00";
    document.getElementById("lblpreciom").innerHTML= "Precio de la motocicleta $0.00";

    document.getElementById("lbl03_03").innerHTML= "03 Cuotas sin intereses de $0.00";
    //document.getElementById("lbl03t_03t").innerHTML= "03 cuotas s/i + traspaso de $0.00";
    document.getElementById("lbl06_06").innerHTML= "06 Cuotas de $0.00";
    document.getElementById("lbl12_12").innerHTML= "12 Cuotas de $0.00";
    document.getElementById("lbl18_18").innerHTML= "18 Cuotas de $0.00";
    document.getElementById("lbl24_24").innerHTML= "24 Cuotas de $0.00";

    formulario.reset();
    document.getElementById("numero1").focus();
}

