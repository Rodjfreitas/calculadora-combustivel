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