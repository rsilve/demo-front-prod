
const hello = document.createElement('span')
hello.innerText = `[v0] ${new Date().toLocaleString()} - Hello`
document.getElementById("main").appendChild(hello);
