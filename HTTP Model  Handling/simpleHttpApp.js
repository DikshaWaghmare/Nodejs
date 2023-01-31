let http=require("http");
let server=http.createServer((request,response)=>{
    response.setHeader("content-type","text/html"); //for teling server about html
    response.end("<h2><font color=pink>Welcome Diksha</font></h2>");
})
server.listen(3000,()=>console.log("Server running on port no. 3000"));
//for run: http://localhost:3000