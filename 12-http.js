const http = require("http")


const server = http.createServer((req,res)=>{
//note: Request(req) is the requesting the client(user) sent to the server and the answer the user is expecting is a response(res) from the server. Note the response has to be provided by the server.
if(req.url==="/"){

  res.end("welcome to our homepage")
}

if(req.url ==="/about"){
  res.end("Here is our short history")
}
res.end(`<h1>Opps!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href = "/"> back home</a>
`)

})



server.listen(5000)