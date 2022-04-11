let form = document.getElementById("email-form");

let email = form.elements["email"]

let msg = document.querySelector(".msg");

    form.querySelector("button").addEventListener("click", function(e) {
        
        msgArr = [];
        msg.innerHTML = "";

            if(email.value === "") {
                msgArr.push("The Email field is required")
            }
            else if(email.value.indexOf("@") === -1) {
                msgArr.push("The Email should contain @")
            }
            else if(email.value.indexOf(".") === -1) {
                msgArr.push("The Email should contain .")
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

const removeErr = () => {
    let msgErr = document.querySelectorAll(".msg p i")
    for(let i=0; i<msgErr.length; i++) {
        msgErr[i].addEventListener("click", () => { 
            msgErr[i].parentNode.style.display = "none"
        })
    }
}
removeErr()

