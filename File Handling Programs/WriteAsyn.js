let fs=require("fs");
var data="Welcome diksha";
// fs.writeFile("demo.txt",data,(err)=>{
//     if(!err){
//         console.log("Data stored in file");
//     }
// })


// append the data using a
fs.writeFile("demo.txt",data,{"flag":"a+"},(err)=>{
    if(!err){
        console.log("Data stored in file");
    }
})