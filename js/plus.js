document.getElementById('plus').addEventListener('click' , function(){
    const mainValue = document.getElementById('value');
    const mainValueString = mainValue.innerText;
    const convertValue = parseFloat(mainValueString);

    const increase = 1;
    mainValue.innerText = 0

    const finalValue = convertValue + increase;
    if(convertValue === 33){
        return alert("Your count is complete")
        
        
    }

    mainValue.innerText = finalValue;
   

})
