pipeline {
    agent any

    stages {
        stage('Git Cloning') {
            steps {
                git branch: 'main', url: 'https://github.com/vaibhav-dawane/three-tier-nodejs-mongo.git'
            }
        }
        
        stage('Remove Existing my-node-app Container') {
            steps {
                script {
                    sh 'docker kill my-node-app || true'
                    sh 'docker rm my-node-app || true'
                }
            }
        }
        
        stage('Remove Existing Mongo-Express Container') {
            steps {
                script {
                    sh 'docker kill mongo-express || true'
                    sh 'docker rm mongo-express || true'
                }
            }
        }
        
        stage('Remove Existing MongoDB Container') {
            steps {
                script {
                    sh 'docker kill mongodb || true'
                    sh 'docker rm mongodb || true'
                }
            }
        }
        
        stage('Remove Existing Docker Network') {
            steps {
                script {
                    sh 'docker network rm mongo-network || true'
                }
            }
        }
        
        stage('Create Docker Network') {
            steps {
                script {
                    // Create a Docker network
                    sh 'docker network create mongo-network'
                }
            }
        }
        
        stage('Run MongoDB Container') {
            steps {
                script {
                    // Run MongoDB container from Docker Hub with environment variables and on the created network
                    sh 'docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo'
                    
                    // Wait for MongoDB to initialize (you can adjust the sleep time)
                    sleep 15

                }
            }
        }
        
        stage('Run Mongo-Express Container') {
            steps {
                script {
                    // Run Mongo-Express container from Docker Hub with environment variables and on the created network
                    sh 'docker run -d -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password --net mongo-network --name mongo-express -e ME_CONFIG_MONGODB_SERVER=mongodb mongo-express'
                    
                    // Wait for Mongo-Express to initialize
                    sleep 15

                }
            }
        }
        
        stage('Build and Run Nodejs Container') {
            steps {
                script {
                    // Run Mongo-Express container from Docker Hub with environment variables and on the created network
                    sh 'docker build -t my-node-app . '
                    sh 'docker run -d -p 3000:3000 --name my-node-app --network mongo-network my-node-app'
                    
                    
                    // Wait for Mongo-Express to initialize
                    sleep 15

                }
            }
        }
    }   
}