import './deferred.js';

const hello = document.createElement('span')
hello.innerText = `[v1.5] ${new Date().toLocaleString()} - Hello`
document.getElementById("main").appendChild(hello);


