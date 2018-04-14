  
 function getRadioValor(name){
  var rads = document.getElementsByName(name);
   
  for(var i = 0; i < rads.length; i++){
   if(rads[i].checked){
    return rads[i].value;
   }
   
  }
   
  return null;
 }
 
 

function enviar(){
    var nome = document.getElementById('nome').value;
    var nick = document.getElementById('Nickname').value;
    var senha = document.getElementById('senha').value;
    var repita =document.getElementById('Repita').value;
    var email = document.getElementById('email').value;
    var data = document.getElementById('data').value;
    var genero = getRadioValor('genero');   
        
               
              
                      alert("Você cadastrou os seguites dados \n " + nome +"\n" +nick + "\n" + senha + "\n" + repita + "\n" +
                      email + "\n" +data +"\n" +genero);
                    
                
 }
 

