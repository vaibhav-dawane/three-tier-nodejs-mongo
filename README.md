## demo app - developing with Docker

This demo app shows a simple user profile app set up using 
- index.html with pure js and css styles
- nodejs backend with express module
- mongodb for data storage

All components are docker-based

#### To start the application

Step 1: Create docker network

    docker network create mongo-network 

Step 2: start mongodb 

    docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo    

Step 3: start mongo-express
    
    docker run -d -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password --net mongo-network --name mongo-express -e ME_CONFIG_MONGODB_SERVER=mongodb mongo-express   

Step 4: open mongo-express from browser
    
    http://localhost:8081

Default username: `admin` & password: `pass`
Can also check using `docker logs <container-id>` command

Step 5: create `user-account` and `my-db` databases in mongo-express, also create `user` collection in  `user-account` database in mongo-express UI

Step 6: Start your nodejs application locally - go to `app` directory of project 

    cd app
    npm install 
    node server.js
    
Step 7: Access you nodejs application UI from browser

    http://localhost:3000


### With Docker

Step 1: Start mongodb and mongo-express containers on specified ports
    
_You can access the mongo-express under localhost:8081 from your browser_
_You can access the mongo-db under localhost:27017 from your browser_
   
Step 2: Create `Dockerfile`
    
Step 3: Build an image using dockerfile 

    docker build -t my-node-app .       
        
Step 4: Run an image

    docker run -d -p 3000:3000 --network mongo-network my-node-app
