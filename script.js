

const aplication = document.querySelector('.container')
function traer(){
    fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(json => console.log(json))
   
  }

