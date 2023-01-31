let http = require("http");
let url = require("url");
let fs = require("fs");

let server = http.createServer((request, response) => {
  let urlRef = url.parse(request.url, true);
  let Hpage = fs.readFileSync("index.html");
  let Apage = fs.readFileSync("aboutus.html");
  let Cpage = fs.readFileSync("contactus.html");
  let Gpage = fs.readFileSync("Gallary.html");
  let Lpage = fs.readFileSync("Login.html");

  if (urlRef.pathname == "/aboutus") {
    response.write(Apage.toString());
  } else if (urlRef.pathname == "/contactus") {
    response.write(Cpage.toString());
  } else if (urlRef.pathname == "/Gallary") {
    response.write(Gpage.toString());
  } else if (urlRef.pathname == "/Login") {
    response.write(Lpage.toString());
  } else if (urlRef.pathname == "/checkLogin") {
    //response.write("hiii");
    let name = urlRef.query.name;
    let email = urlRef.query.emails;
    let password = urlRef.query.passwords;
    //console.log(name);
    if (name=="Diksha Waghmare" && email == "diksha@gmail.com" && password == "123") {
      response.write("successfully login");
    } else {
      response.write("failure try once again");
    }
  } else {
    response.write(Hpage.toString());
  }
  response.end();
});
server.listen(3000, () => console.log("server running on 3000 port"));
