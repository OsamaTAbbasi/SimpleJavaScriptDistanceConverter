(function(){


    'use strict';

    document.getElementById('convert').addEventListener('submit',function(e){

        e.preventDefault();
        
        const distance = parseFloat(document.getElementById('distance').value);
        // distance = parseFloat(distance);
        const answer = document.getElementById('answer');
        
        if(distance){
          const conversion = (distance * 1.689344).toFixed(3);
        //   var roundedConversion = conversion.toFixed(3);
        //   alert(conversion);
        
        answer.innerHTML="<h2>"+distance+" miles convert to "+conversion+" kilometers</h2>";
        
        }
        else{
          answer.innerHTML = "<h2>Please provide a number!</h2>"
        }
        
        });
})();


