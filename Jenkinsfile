pipeline {
    agent any

    environment{
        DOCKER_USER = 'anil3494'
        DOCKER_IMAGE = 'raindrop-restaurant'
    }

 
    stages{

        stage('Build Docker Image'){
            steps{
                echo 'Building Docker Image: ${DOCKER_USER}/${DOCKER_IMAGE} with tag as ${BUILD_NUMBER}'

                sh 'docker build -t ${DOCKER_USER}/${DOCKER_IMAGE}:${BUILD_NUMBER} .'

                echo "Docker image built successfully!"
            }
        }
    }

    post{
        always{
            echo 'Pipeline CP 2 DONE -- Cloning repo, building and making its Docker Image done'
        }
    }
}




    //     stage('Building Raindrops Application'){
    //         agent{
    //             docker {image 'node:18-alpine'}
    //         }

    //         steps{
    //             echo 'Build Starting ... RUNNING npm install'

    //             sh 'npm install --cache .npm-cache'

    //             echo 'NPM install complete. Running npm run build...'

    //             sh 'npm run build'
                
    //             sh 'pwd'

    //             echo 'App built successfully in Jenkins Workspace'
    //         }
    //     }
    // }