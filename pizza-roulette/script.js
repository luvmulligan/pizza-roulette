const ruleta = document.querySelector("#ruleta");

ruleta.addEventListener("click", girar);

dinero = 50;

function girar(){
  if(dinero>= 20){
    let rand = Math.random()*7200;
    sumarPuntos(-20);
    calcular(rand);

  }else {
    alert("Not enough dough!");
  }
}

function sumarPuntos(p){
  dinero += p;
  document.querySelector("#dinero").innerHTML = "Money: " + dinero + "U$D";
}

function calcular(rand){
  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))*360;
  ruleta.style.transform = "rotate("+rand+"deg)";
  setTimeout(()=>{switch (true){
    case valor > 0 && valor <= 45:
    alert ("Broccoli <3 You won U$D 500! So healthy :)");
    sumarPuntos(500)      
    break;
    case valor > 45 && valor <= 90:
    alert("Mmm..Margheritta! You won U$D 20!");
    sumarPuntos(20);
    break;
    case valor > 90 && valor <= 135:
            alert("Salami. You won U$D 5!");
            sumarPuntos(5);
            break;
        case valor > 135 && valor <= 180:
            alert("Chicken pizza, why not? You won U$D 50!");
            sumarPuntos(50);
            break;
        case valor > 180 && valor <= 225:
            alert("Fugazza! You won U$D 100!");
            sumarPuntos(100);
            break;
        case valor > 225 && valor <= 270:
            alert("Ugh..shrimp. You didn't win:(");
            break;
        case valor > 270 && valor <= 315:
            alert("Meatlovers! You won U$D 70!");
            sumarPuntos(70);
            break;
        case valor > 315 && valor <= 360:
            alert("Sausage. You won U$D 10!");
            sumarPuntos(10);
break;
}},5000);
}
