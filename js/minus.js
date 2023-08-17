
document.getElementById('minus').addEventListener('click' , function(){
    console.log("I got clicked");
    const decMainValue = document.getElementById('value');
    const decMainValueString = decMainValue.innerText;
    const Converted = parseFloat(decMainValueString);

    const decrease = 1;

    if(Converted !== 0){
        const decFinalValue = Converted - decrease;
        decMainValue.innerText = decFinalValue;
    }
    else{
        alert("You can not decrease less then 0")
    }
})