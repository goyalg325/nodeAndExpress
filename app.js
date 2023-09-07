// // const amt = 12;
// // if(amt<10){
// //     console.log(`small no.`)
// // }
// // else{
// //     console.log(`large no.`)
// // }
// // console.log(`hey this is my first node app`)
// // setInterval(()=>{
// //     console.log('hello world')
// // },1000)
// // const names = require('./names.js')
// // const sayhi = require('./utils.js')
// // require('./brainstorm.js')
// // sayhi(names.person.name)
// // const os = require('os')
// // info about current user
// // const user = os.userInfo()
// // console.log(user)
// // console.log(`the system uptime is ${os.uptime()} seconds`)
// // const curr = {
// //     name: os.type(),
// //     Release:os.release(),
// //     free :  os.freemem(),
// //     total : os.totalmem(),
// // }
// // console.log(curr)
// // const path = require('path')
// // console.log(path.sep)
// // const pathg = path.join('/content','subfolder','test.txt')
// // console.log(pathg)
// // const Base = path.basename(pathg)
// // console.log(Base)
// // const abs = path.resolve(__dirname,'content','subfolder','test.txt')
// // console.log(abs)
// // const {readfilesync,writefilesync, readFileSync, writeFileSync} = require('fs')
// // const first = readFileSync('content/first.txt','utf8')
// // const second = readFileSync('content/second.txt','utf8')
// // console.log(first,second)
// // writeFileSync('content/result-sync.txt',`here is the result ${first} ${second}`)
// // const {readFile,writeFile} = require('fs')
// // readFile('./content/first.txt','utf8',(err,result)=>{
// //     if(err){
// //         console.log(err)
// //         return
// //     }
// //     const firsti = result
// //     readFile('./content/second.txt','utf8',(err,result)=>{
// //         if(err){
// //             console.log(err)
// //             return
// //         }
// //         const secondi = result
// //         writeFile('./content/result-async.txt',`here is the result ${firsti} ${secondi}`,(err,result)=>{
// //             if(err){
// //                 console.log(err)
// //                 return
// //             }
// //             // console.log(result) 
// //         })
// //     })
    
// // })
// const http = require('http')
// const server = http.createServer((req,res) =>{
//    if(req.url==='/'){
//     res.end(`wlc to our home page`)
//    }
//    if(req.url==='/about'){
//     res.end(`here is our brief history`)
//    }
//    res.end(
//   `  <h1>OOPS!</h1>
//   <p>can't find page</p>`
//    )
// })
// server.listen(5000)
console.log(`first task`)
setTimeout(()=>{
   console.log(`second task`)
},0)
console.log(`third task`)