let emailList = document.getElementsByClassName("email")
const key = "0bf36561e7c12161ad9c8ddfb933ee58"
let emailArray = Array.from(emailList);
let loading = true

emailArray.forEach(email => {
    const url = `http://apilayer.net/api/check?access_key=${key}&email=${email.textContent}`

    fetch(url)
    .then(response => response.json())
    .then(data => sendResult(data))
    .catch(err => console.log(err))

    function sendResult(data) {
        let tableBody = document.getElementById("table-body")
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")

        const checkResult = () => {
            if (!data.format_valid) {
                return "Format is not valid"
            }
            else if (data.disposable) {
                return "Disposable email"
            }
            else if (!data.mx_found) {
                return "no MX-record found"
            }
            else if (!data.smtp_check) {
                return "SMTP failed"
            }
            else {
                return "success"
            }
        }

        td1.textContent = `${new Date().getDate()} / ${new Date().getMonth()} / ${new Date().getFullYear()}`
        td2.textContent = data.email
        td3.textContent = data.score
        td4.textContent = checkResult()

        if(td3.textContent > 0.5) {
            tr.className = "green"
        }
        else {
            tr.className = "red"
        }

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)

        tableBody.appendChild(tr);
        
    }

})