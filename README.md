POC application using Node JS, Kafka and Docker Container. Functionality of this poc is posting a message on kafka topic and consuming payload message.
Technologies used:  node js for posting a message on topic, “kafka” as a messaging system and Docker container for hosting the application.

Kafka:

Installed kafka server in my linux lod machine, extracted zip file and used below commands

•	bin/zookeeper-server-start.sh config/zookeeper.properties(Started zookeeper server)
•	bin/kafka-server-start.sh config/server.properties(Started kafka Server)
•	bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test(Created a topic with name test)
•	bin/kafka-topics.sh --list --zookeeper localhost:2181(listing available topics)
•	bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic test --from-beginning(Verifying the messages on topic)

Docker : 

•	docker build -t prodkafkaf . (Created the image file)
•	docker run -it --name kafkdockcontainer -p 9996:8181 prodkafkaf(Created and started the container)
    
 


NodeJS:

            Imported the ‘Kafka-Node’ module for creating producer and posting messages on Kafka queue, sending the payload to kafka queue from NodeJS code. Used CURL command to invoke the address

curl -H "Content-Type: application/json" \ -d '{"username":"Vijay","password":"Hidden"}' http://batvi03-U178208:9996/upload


