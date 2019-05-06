//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input


document.getElementById("start").addEventListener("click", function (e) {
    e.preventDefault();
    let form = document.querySelector('form');
    let output = "";
    
    let loopNumber = parseFloat(form.elements.loopNumber.value);
    console.log(loopNumber);
    let div1 = parseFloat(form.elements.div1.value);
    console.log(div1);
    let div2 = parseFloat(form.elements.div2.value);
    console.log(div2);
    if (div1 == 0 || div2 == 0) {
        document.getElementById("result").innerHTML = "Det går inte att dividera med 0";
    }
    else {
        for (var i = 1; i < (loopNumber + 1); i++) {
            if (i % div1 == 0 && i % div2 == 0) {
                output += "Bish-Bosh, ";
                continue;
            }
            if (i % div1 == 0) {
                
                    output += "Bish, ";
                
            }

            else if (i % div2 == 0) {
                
              
                    output += "Bosh, ";
            }
            else
          
                output += i + ", ";
        }
        output=output.substring(0, output.length - 2);
        output+="."       
        
        document.getElementById("result").innerHTML = output;
    }
   // console.log(output);
})
 

   
