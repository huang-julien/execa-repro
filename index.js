import { execa } from "execa"


const process = execa`node ./script.js`

setTimeout(() => {
    console.log(process.kill())
}, 5000)
