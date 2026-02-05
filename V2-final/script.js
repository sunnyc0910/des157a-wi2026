(function(){

    "use strict";
    console.log("reading js");

    const myForm = document.querySelector("#myform");
    const madlib = document.querySelector("#madlib");

    myForm.addEventListener("submit", function(event){
        event.preventDefault();
        

        const name = document.querySelector("#name").value;
        const adj = document.querySelector("#adj").value;
        const fruit = document.querySelector("#fruit").value;
        const noun = document.querySelector("#noun").value;
        const food = document.querySelector("#food").value;
        const verb = document.querySelector("#verb").value;
        const animal = document.querySelector("#animal").value;

        let myText;


        if (name == '') {
            myText = "Please provide a name";
            document.querySelector('#name').focus();
        }

        else if (adj == '') {
            myText = "Please provide an adjective";
            document.querySelector('#adj').focus();
        }

        else if (fruit == '') {
            myText = "Please provide a fruit name";
            document.querySelector('#fruit').focus();
        }

        else if (noun == '') {
            myText = "Please provide a noun";
            document.querySelector('#noun').focus();
        }

        else if (food == '') {
            myText = "Please provide a food";
            document.querySelector('#food').focus();
        }

        else if (verb == '') {
            myText = "Please provide a verb";
            document.querySelector('#verb').focus();
        }

        else if (animal == '') {
            myText = "Please provide an animal name";
            document.querySelector('#animal').focus();
        }

        else {
        
            myText = `
                <div class="paper-card">
                    <button class="close-btn" onclick="document.querySelector('#madlib').classList.add('hidden')">×</button>
                    
                    <div class="card-header">
                        Galactic Cuteness Protection Center · Entry Approval
                    </div>
                    
                    <div class="story-content">
                        <p><strong>Species:</strong> Earth Human Adoption</p>
                        <p><strong>Codename:</strong> <span class="fill-in">${name}</span></p>
                        
                        <p><strong>Visual Scan:</strong> Upon inspection, this human appears extremely <span class="fill-in">${adj}</span>. It has a very pleasant texture and is classified as a Grade-A Protected Cutie.</p>
                        
                        <p><strong>Special Abilities:</strong> Surprisingly, this human possesses a mysterious telepathic ability. It claims to be able to communicate fluently with <span class="fill-in">${fruit}</span>s and frequently holds secret meetings with them.</p>
                        
                        <p><strong>Luggage Declaration:</strong> The human is clinging tightly to a <span class="fill-in">${noun}</span> and refuses to let go. It claims this object is its "lifeline." Confiscation is strictly prohibited.</p>
                        
                        <p><strong>Care & Soothing Guide:</strong><br>
                        1. You must feed it <span class="fill-in">${food}</span> regularly, otherwise the human will make strange whimpering noises.<br>
                        2. If the human appears nervous, please gently <span class="fill-in">${verb}</span> its head until it falls asleep.</p>
                    </div>

                    <div class="footer">
                        Approved By: Supreme Commander of Planet <span class="fill-in">${animal}</span>
                    </div>
                </div>
            `;


            document.querySelector("#name").value = '';
            document.querySelector("#adj").value = '';
            document.querySelector("#fruit").value = '';
            document.querySelector("#noun").value = '';
            document.querySelector("#food").value = '';
            document.querySelector("#verb").value = '';
            document.querySelector("#animal").value = '';
            

            madlib.classList.remove("hidden");
        }


        madlib.innerHTML = myText;
        
    });

})();