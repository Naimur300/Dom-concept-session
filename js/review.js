document.querySelector("#submit").addEventListener("click", function () {
  const textAreaElement = document.getElementById("t-area");
  const tAreaValue = textAreaElement.value;

  textAreaElement.value = ''
  const p = document.createElement('p');


p.innerText = tAreaValue;
p.style.textAlign = "center"
p.style.fontSize = "20px"
p.style.color = "black"
p.style.marginTop = "20px"
p.style.marginBottom = "15px"






const container = document.querySelector('#review');
container.appendChild(p)
});
  
document.getElementById('t-area').addEventListener('keyup' , function(event){
    if(event.key == "Enter"){
        const textAreaElement = document.getElementById("t-area");
        const tAreaValue = textAreaElement.value;
      
        textAreaElement.value = ''
        const p = document.createElement('p');
      
      
      p.innerText = tAreaValue;
      p.style.textAlign = "center"
      p.style.fontSize = "20px"
      p.style.color = "black"
      p.style.marginTop = "20px"
      p.style.marginBottom = "15px"
    
      
      
      
      
      
      const container = document.querySelector('#review');
      container.appendChild(p)
        
    }
});

