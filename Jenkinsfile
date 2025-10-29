pipeline {
  agent any

  environment {
    DOCKER_USER = 'anil3494'
    DOCKER_IMAGE = 'raindrop-restaurant'
    DOCKER_PASS = credentials('docker-hub-pass')  // Jenkins credential ID
  }

  stages {

    stage('Build React App') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh '''
          docker build -t ${DOCKER_USER}/${DOCKER_IMAGE}:${BUILD_NUMBER} .
        '''
      }
    }

    stage('Push Docker Image') {
      steps {
        sh '''
          echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
          docker push ${DOCKER_USER}/${DOCKER_IMAGE}:${BUILD_NUMBER}
        '''
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh '''
          ssh -o StrictHostKeyChecking=no ubuntu@172.31.6.198 \
          "kubectl set image deployment/raindrop-restaurant-deployment raindrop-container=${DOCKER_USER}/${DOCKER_IMAGE}:${BUILD_NUMBER} --record"
        '''
      }
    }
  }
}
