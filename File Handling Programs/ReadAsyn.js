let fs=require("fs");
fs.readFile("demo.txt",(err,data)=>{
    if(!err){
        //console.log(data);//display in buffer format
        console.log(data.toString()); //converting buffer to string format
    }
    else{
        console.log("Error generated"+err)
    }
})