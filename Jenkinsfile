pipeline {
    agent any

    environment{
        // Docker variables
        DOCKER_USER = 'anil3494'
        DOCKER_IMAGE = 'raindrop-restaurant'

        // Kub Variables
        KUB_MASTER_HOST = 'ubuntu@35.78.192.110'

        KUB_MASTER_CREDS = 'k8s-master-ssh'
    }

 
    stages{

        stage('Build Docker Image'){
            steps{
                echo 'Building Docker Image: ${DOCKER_USER}/${DOCKER_IMAGE} with tag as ${BUILD_NUMBER}'

                sh 'docker build -t ${DOCKER_USER}/${DOCKER_IMAGE}:${BUILD_NUMBER} .'

                echo "Docker image built successfully!"
            }
        }

        stage('Push Docker Image to Docker Hub'){
            steps {
                echo "Pushing image to Docker Hub..."

                // This block securely loads the credentials
                withCredentials([usernamePassword(credentialsId: 'ak-dockerhub-creds', usernameVariable: 'DOCKER_USER_VAR', passwordVariable: 'DOCKER_PASS_VAR')]) {
                    sh  '''
                    # Log in to Docker Hub using the credentials
                    # Using --password-stdin is secure and prevents the password from being logged
                    echo $DOCKER_PASS_VAR | docker login -u $DOCKER_USER_VAR --password-stdin

                    # Push the image that was built in the previous stage
                    docker push ${DOCKER_USER}/${DOCKER_IMAGE}:${BUILD_NUMBER}
                    '''
                }
                 
                echo "Image pushed successfully!"
            }
        }

        stage('Deploy to Kub'){
            steps{
                echo 'Deploying to Kubernetes Cluster...'

                sshagent (credentials: [KUB_MASTER_CREDS]) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ${KUB_MASTER_HOST} \
                        "sudo kubectl set image deployment/raindrop-deployment raindrop-container=${DOCKER_USER}/${DOCKER_IMAGE}:${BUILD_NUMBER}"
                    '''
                }
                echo "Deployment to Kubernetes complete!"
            }
        }
    }

    post{
        always{
            // echo 'Pipeline CP 3 DONE -- Image built and pushed to Docker Hub'
            echo 'Pipeline CP 4 DONE -- Full CI/CD complete!'
        }
    }
}