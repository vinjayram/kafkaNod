var http=require('http');

var request = { 
  hostname: 'batvi03-U178208',
  port: '9092' ,
  path: '/upload',
  method: 'GET'
 };


 http.createServer(function(request, response) {

    response.writeHeader(200, {"Content-Type": "application/json"});

    request.on('data', function (chunk) { 
    
    console.log(chunk.toString('utf8')) 
    
    var kafka = require('kafka-node'),
    Producer = kafka.Producer, 
    client = new kafka.Client('batvi03-U178208:2181'),
    producer = new Producer(client);
 
  payloads = [ { topic: 'test', messages: chunk.toString('utf8'), partition: 0 }, ]; 
 console.log('Checking whether producer is ready'); 
 producer.on('ready', function(){
   console.log('Senind data....');
    producer.send(payloads, function(err, data){
       console.log(data)
       });
   }); 
  

producer.on('error', function(err){
  }) 
});
 response.end(); 
 
	}).listen(8181); 
  console.log("Server upon and running");
