
const hello = document.createElement('span')
hello.innerText = `${new Date().toLocaleString()} - Hello`
document.getElementById("main").appendChild(hello);
