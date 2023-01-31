var image = document.querySelector('img')
var price = document.querySelector('#price')


function imageEnter(){
  image.style.cursor = 'pointer'
  image.style.transform = 'translateY(20px)'  
  image.style.transition = 'all 0.8s ease-in-out'
}

function imageOut(){
  image.style.transform = 'translateY(0px)'
  image.style.transition = 'all 0.8s ease-in-out'
   
}

function Reset(){
  location.reload()
}

function Calcular(){
  var price = document.querySelector('#price')
  var kmh = document.querySelector('#kmh')
  var valor = document.querySelector('#money')
  
 

  if(valor.value == 0){
    var erro = document.querySelector('.erro')
    erro.innerText = 'Preencha o valor que será abastecido'

  }else{
    
    var telaConteudo = document.querySelector('#content')
    var telaResultado = document.querySelector('#resultado')
    telaConteudo.style.display = 'none'
    telaResultado.style.display = 'block'

    var litros = document.querySelector('.litros')
    var valorLitros = Number(valor.value) / Number(price.value)
    valorLitros = valorLitros.toFixed(2)
    litros.innerHTML = `<h2>R$ ${Number(valor.value)} abastecerá 
    <strong>${Number(valorLitros)}</strong> litros de combustível`

    var kmLitros = document.querySelector('.kmLitros')    
    kmLitros.innerHTML = `<h2>Sua autonomia será de <strong>
    ${Number(valorLitros) * Number(kmh.value)}</strong> km
    de combustível.`
    }
}