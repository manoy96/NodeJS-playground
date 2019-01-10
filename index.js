const fetchData = callback => {
  const promis = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hi!!!')
    }, 1500)
  });
  return promise
    
}

setTimeout(() => {
  console.log('Timer is done!')
  fetchData().then(text => {
    console.log(text)
  })
}, 2000 )

console.log('Hello')
console.log('Hello again') 