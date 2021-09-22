
const moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
function llenarSelect(){
    var selector=document.getElementById("divisas");    
    var selector2=document.getElementById("divisas2");          

    moneda.forEach(element => {  
    itemDivisa=document.createElement("option");             
    itemDivisa.textContent=element;    
    itemDivisa2=document.createElement("option");             
    itemDivisa2.textContent=element;         
    selector.appendChild(itemDivisa);
    selector2.appendChild(itemDivisa2);            
    }); 
} 
function convertirDivisas(){
    valor=document.getElementById("cantidad").value; 
    resultado=0;           
    op1=document.getElementById("divisas").value;              
    op2=document.getElementById("divisas2").value; 
    const parrafo=document.getElementById("excepcion");    
    if(valor=="" || isNaN(valor)){
        parrafo.innerHTML="Digite una cantidad valida";
    }else if (op1=="Elige tu Moneda" || op2 =="Elige tu Moneda") {
        parrafo.innerHTML="Elija opciones validas";
    }else if (op1==op2) {
        parrafo.innerHTML="Elija opciones distintas";
    } else {        
    if(op1=="Dolar" && op2=="Peso Mexicano"){
        resultado=valor*20.12;
    }else if (op1=="Dolar" && op2=="Peso Colombiano") {
        resultado=valor*3844;           
    }else if (op1=="Dolar" && op2=="Euro") {
        resultado=valor*0.85;           
    }else if (op1=="Dolar" && op2=="Libra Esterlina") {
        resultado=valor*0.73;           
    } else if(op1=="Peso Mexicano" && op2=="Dolar"){
        resultado=valor*0,05;
    }else if (op1=="Peso Mexicano" && op2=="Peso Colombiano") {
        resultado=valor*190.53;           
    }else if (op1=="Peso Mexicano" && op2=="Euro") {
        resultado=valor*0.042;           
    }else if (op1=="Peso Mexicano" && op2=="Libra Esterlina") {
        resultado=valor*0.036;           
    }else if(op1=="Peso Colombiano" && op2=="Dolar"){
        resultado=valor*0.00026;
    }else if (op1=="Peso Colombiano" && op2=="Peso Mexicano") {
        resultado=valor*0.0052;           
    }else if (op1=="Peso Colombiano" && op2=="Euro") {
        resultado=valor*0.00022;           
    }else if (op1=="Peso Colombiano" && op2=="Libra Esterlina") {
        resultado=valor*0.00019;           
    }else if(op1=="Euro" && op2=="Dolar"){
        resultado=valor*1.17;
    }else if (op1=="Euro" && op2=="Peso Mexicano") {
        resultado=valor*23.62;           
    }else if (op1=="Euro" && op2=="Peso Colombiano") {
        resultado=valor*4498.98;           
    }else if (op1=="Euro" && op2=="Libra Esterlina") {
        resultado=valor*0.86;           
    }else if(op1=="Libra Esterlina" && op2=="Dolar"){
        resultado=valor*1.37;
    }else if (op1=="Libra Esterlina" && op2=="Peso Mexicano") {
        resultado=valor*27.52;           
    }else if (op1=="Libra Esterlina" && op2=="Peso Colombiano") {
        resultado=valor*5242.39;           
    }else if (op1=="Libra Esterlina" && op2=="Euro") {
        resultado=valor*1.17;           
    }
    parrafo.innerHTML=(valor+" en "+op1+" equivale a "+resultado+" en "+op2);        
    }    
}     