
setInterval(function () {
    const hello = document.createElement('span')
    hello.innerHTML = `[v1] ${new Date().toLocaleString()} - Hello<br>`
    document.body.appendChild(hello);
}, 1000)
