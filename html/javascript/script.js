function naveb(){
    var nave = document.querySelector(".navinha")
    var bala  = document.querySelector(".bala")
    var clone = document.querySelector(".clone")
    nave.style.display = "none"
    bala.style.display = "none"
    clone.style.display = "none"

}
function play(){
    var play = document.querySelector(".play")
    var pontos = document.querySelector('.pontos')
    var pn = document.querySelector(".pontos-numeros")
    var vidas = document.querySelector(".vidas")
    var vn = document.querySelector(".vidas-numeros")
    var nave = document.querySelector(".navinha")
    var bala = document.querySelector(".bala")
    var clone = document.querySelector(".clone")
    pontos.innerHTML = "PONTOS:"
    pn.innerHTML = Number.parseInt(0)
    vidas.innerHTML ="Vidas:"
    vn.innerHTML = '3'
    nave.style.display= "block"
    bala.style.display = "none"
    clone.style.display = "none"
    
    if(play.style.display === "none") {
        play.style.display = "block"
    
    
    } else {
        play.style.display = "none"
        
    
    }
    
}
document.addEventListener("mousemove", function(e) {
    var nave = document.querySelector(".navinha");
    nave.style.left = e.pageX + 'px';
    nave.style.top = e.pageY + 'px';
});
document.addEventListener("mousemove", function(e) {
    var bala = document.querySelector(".bala");
    bala.style.left = e.pageX + 'px';
    bala.style.top = e.pageY + 'px';
});document.addEventListener("mousemove", function(e) {
    var clone = document.querySelector(".clone");
    clone.style.left = e.pageX + 'px';
    clone.style.top = e.pageY + 'px';
});
function atirar(){
    
    var bola = document.querySelector(".bala")
    var clone = document.querySelector(".clone")
    var posicao = clone.offsetTop;
    var pontosn = document.querySelector('.pontos-numeros');
    pontosn = parseInt(pontosn); pn.innerHTML = Number.parseInt(0)

 

    bola.style.display = "block"
    clone.style.display = "block"
   
       
     pontosn++
  
} 
function patirar(){

    var bola = document.querySelector(".bala")
    var clone = document.querySelector(".clone")
    

    bola.style.display = "none"
    clone.style.display = "none"

    

}