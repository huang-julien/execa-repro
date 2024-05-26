process.on('SIGTERM', () => {
    console.log('SIGTERM signal received')
    process.exit()
})


setTimeout(() => {
 throw new Error('This should have been closed by index.js')
}, 10000)
