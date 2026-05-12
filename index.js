//let boton = document.getElementById("Boton")
medidas=[];  
const btn = document.getElementById("Boton");
let relleno = document.getElementById("relleno");
let imagen = document.getElementById("foto")
let imagen1 = document.getElementById("foto1")
let imagen2 = document.getElementById("foto2")
let relleno3=document.getElementById("relleno3")
let imagen3=document.getElementById("foto3")

let counter = 0;

/*let creoEtiquetas = ()=>{
  let verificador= true
  if (counter==) {
    
  }
}*/
function moverBotonAleatorio() {
  
  
  // Obtener dimensiones
  const docWidth = document.body.clientWidth;
  const docHeight = document.body.clientHeight;
  const btnWidth = btn.offsetWidth;
  const btnHeight = btn.offsetHeight;
  
  // Calcular posición aleatoria evitando bordes
  const posx = Math.random() * (docWidth - btnWidth);
  const posy = Math.random() * (docHeight - btnHeight);
    counter ++

  
  // Aplicar estilos
  btn.style.position = "absolute"; // O 'fixed'
  btn.style.left = posx + "px";
  btn.style.top = posy + "px";

   if (counter >= 3 && counter<6 ) {
  relleno.innerHTML = ""
  imagen.src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjNtZzJkZTIwejQxaHpxdGQ3cmk1YXc0MjF2ZDRic29kZHJ0YXd2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7AzEXdIb1wyCTWJntb/giphy.gif" 
    relleno.append("¿Me estas rechazando? 💔")

  /*Cara de gatito triste*/

} else if (counter >= 6 && counter<=10) {
  relleno.innerHTML = ""
  imagen.src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG82NHlwYjJ3b3ViMWZzdDFyZ215NnlvYWlhejIwNHJpbzE5bTVkMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LgR0AnXJBrO4E/giphy.gif" 

    relleno.append("¿Estas jugando con mi corazon?")   
}
else if(counter >10){
  relleno.innerHTML=""
  relleno.append("Solo cerra la pesataña voy a llorar 😭")
  imagen.src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnBlZWQ4aW1mb3phYmpoa3FsN3BmY2sxeW5tbWxvZzhpZ3VldTgwdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EQIkgfMCjs1kk/giphy.gif"
}

}

// Llamar a la función cuando se necesite
btn.onmouseover=()=>{moverBotonAleatorio();console.log(counter)} 
btn.onclick=()=>{moverBotonAleatorio();console.log(counter);}

function medidasPantalla(){
    const docWidth = document.body.clientWidth;
    const docHeight = document.body.clientHeight;
    return medidas =[docWidth,docHeight];
};
medidasPantalla();
console.log(medidas);
