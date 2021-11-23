
setInterval(function () {
    const hello = document.createElement('span')
    hello.innerHTML = `[v0] ${new Date().toLocaleString()} - Hello<br>`
    document.body.appendChild(hello);
}, 1000)


console.log("hello")