// const amount = 12

// if (amount < 10) {
//     console.log('small number')
// } else {
//     console.log('large number')
// }

// console.log(`hey it's my first node app!!!`)

/* 
  commonJS, Every file is module (by default)
  Modules - Encapsulated Code  

*/
// const {john, peter} = require('./name')
// const sayHi = require('./utils')
// const data = require('./alternative-flavor')
// require('./mind-grenade')
// console.log(data);
// sayHi('susan')
// sayHi(john)
// sayHi(peter)


/*
  OS Module
*/

// const os = require('os')
// const user = os.userInfo()
// console.log(user)

// console.log(`The system uptime is ${os.uptime()} seconds`)

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem:os.totalmem(),
//   freeMem: os.freemem(),
// }
// console.log(currentOS);

/* 
  path module
*/

// const path = require('path')
// console.log(path.sep);

// const filePath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute)

/*
  working with file
*/


// const {readFileSync, writeFileSync} = require('fs')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')
// writeFileSync(
//   './content/result-sync.txt',
//   `here is the result: ${first}, ${second}`,
//   {flag: 'a'}
// )
/* 

*/

const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(result)
})
