
document.getElementById('submit').addEventListener("click",
function(){
   let sugar = document.getElementById('sugarLevel').value;
    let sugar1 = Number(sugar);
    if(sugar1 < Number(70))
        {
            alert('Prediabetic');
        }
    else if( sugar1 > Number(70) && sugar1 < Number(126))
        {
            alert('Normal Range');
        }
    else{
        alert(' Diabetic');
        
    }
   
});
  