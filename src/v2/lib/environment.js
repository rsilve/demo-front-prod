export function environment() {
    const node = document.createElement('div')
    const env = process.env.NODE_ENV
    node.innerText = `[v2] ${env}`
    document.body.appendChild(node);
}