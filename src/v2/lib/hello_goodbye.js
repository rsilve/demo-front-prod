export function hello() {
    const hello = document.createElement('span')
    hello.innerText = `[v2] ${new Date().toLocaleString()} - Hello`
    document.getElementById("main").appendChild(hello);
}

export function bye() {
    const bye = document.createElement('span')
    bye.innerText = `[v2] ${new Date().toLocaleString()} - Bye`
    document.getElementById("main").appendChild(bye);
}