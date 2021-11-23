
const hello = document.createElement('span')
hello.innerText = `[v0] ${new Date().toLocaleString()} - Hello`
document.getElementById("main").appendChild(hello);


const script = document.createElement('script')
script.src = "deferred.js"
script.type = "application/javascript"
document.body.appendChild(script);


