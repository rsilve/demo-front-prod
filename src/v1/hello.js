export  function hello() {
    const hello = document.createElement('span')
    hello.innerText = `[v1] ${new Date().toLocaleString()} - Hello`
    document.getElementById("main").appendChild(hello);
}

export  function bye() {
    const hello = document.createElement('span')
    hello.innerText = `[v1] ${new Date().toLocaleString()} - Bye`
    document.getElementById("main").appendChild(hello);
}