var http=require("http");
var server=http.createServer(function(request,response){
response.end("hello world");

});
var port=3000;
server.listen(port,function(){
    console.log("server ayağa kalktı. port:"+port);
})