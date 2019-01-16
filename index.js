// const fetchData = callback => {
//   const promis = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Hi!!!')
//     }, 1500)
//   });
//   return promise
    
// }

// setTimeout(() => {
//   console.log('Timer is done!')
//   fetchData().then(text => {
//     console.log(text)
//   })
// }, 2000 )

// console.log('Hello')
// console.log('Hello again') 

const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-type', 'text/html')
    res.setHeader('Manuel', 'Manuel is awesome')
    res.write('<html>')
    res.write('<head><title>Testing my server</title></head>')
    res.write('<body><h1>Welcome to my server page!</h1></body>')
    res.write('</html>')
    return res.end()
  }
  if (req.url === '/api') {
    const jane = {
      book: 'Pride and Prejudice',
      movie: 'Persuasion',
      age: 41,
    }
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(jane))
    return res.end()
  }
  if (req.url === '/user'){
    const body = [];
    req.on('data', chunk => {
      body.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      console.log(parsedBody.split('=')[1])
    })
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  }
})


server.listen(5000)