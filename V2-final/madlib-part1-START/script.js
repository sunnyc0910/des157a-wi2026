(function(){

    "use strict";
    console.log("reading js");
    const myForm = document.querySelector("#myform");
    const madlib = document.querySelector("#madlib");

    myForm.addEventListener("submit",function(event){
        event.preventDefault();
        //alert("form submitted");

        const noun1 = document.querySelector("#noun1").value;
        const noun2 = document.querySelector("#noun2").value;
        const adj = document.querySelector("#adj").value;
        const verb = document.querySelector("#verb").value;
        

        let myText;

        if ( noun1 == ''){
            myText = "Please provide a noun";
            document.querySelector('#noun1').focus();
        }

        else if ( noun2 == ''){
            myText = "Please provide a noun";
            document.querySelector('#noun2').focus();
        }
        
        else if ( adj == ''){
            myText = "Please provide a adjective";
            document.querySelector('#adj').focus();
        }

        else if ( verb == ''){
            myText = "Please provide a verb";
            document.querySelector('#verb').focus();
        }

        else {
        myText = `Here are the words you submitted: ${noun1}, ${noun2}, ${adj}, and ${verb}.`;

        document.querySelector("#noun1").value = '';
        document.querySelector("#noun2").value = '';
        document.querySelector("#adj").value = '';
        document.querySelector("#verb").value = '';
        }
  
        /*if(nou1 && noun2 && adj && verb){
            myText = `Here are the words you submitted ${noun1}, ${noun2}, ${adj} and ${verb}`;
        } else {
            myText = "fill out tge fields bonehead!";
        }*/

        // const myText = `Here are the words you submitted ${noun1}, ${noun2}, ${adj} and ${verb}`
        madlib.innerHTML = myText;
        
    });


})();
