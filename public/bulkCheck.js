let form = document.getElementById("email-form");

const getInputs = () => {
    let inputs = document.querySelectorAll(".container aside.box.bulk .para form .emailInputs input")
    return inputs
}

let msg = document.querySelector(".msg");

form.querySelector("button").addEventListener("click", function(e) {
        
        msgArr = [];
        msg.innerHTML = "";

        getInputs().forEach(email => {
            if(email.value === "") {
                msgArr.push("No email field should be empty")
            }

            if(msgArr.length !== 0) {
                e.preventDefault()
                msgArr.forEach(messages => {
                    let p = document.createElement("p");
                    let i = document.createElement("i");
                    i.className = "fa fa-times"
                    p.textContent = messages;
                    p.appendChild(i)
                    msg.appendChild(p)
                })
                removeErr()
            }
        })


})


const addEmail = () => {
    let add = document.querySelector(".fa-plus")
    if(add) {            
        let form = document.querySelector(".container aside.box.bulk .para form .emailInputs")
        index=2;

        add.addEventListener("click", () => {
            let input = document.createElement("input")
            input.type = "email";
            input.placeholder = "Enter email..."
            input.name = `email${index}`;
            index+=1
            form.appendChild(input)
            getInputs();
        })
    }
}
addEmail()

const removeErr = () => {
    let msgErr = document.querySelectorAll(".msg p i")
    for(let i=0; i<msgErr.length; i++) {
        msgErr[i].addEventListener("click", () => { 
            msgErr[i].parentNode.style.display = "none"
        })
    }
}
removeErr()