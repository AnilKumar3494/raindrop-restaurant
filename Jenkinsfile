pipeline {
    agent: any

    stages{
        stage('Building Raindrops Application'){
            agent{
                docker {image 'node:18-alpine'}
            }

            steps{
                echo 'Build Starting ... RUNNING npm install'

                sh 'npm install --cache .npm-cache'

                echo 'NPM install complete. Running npm run build...'

                sh 'npm run build'

                echo 'React App built successfully in Jenkins Workspace'
            }
        }
    }

    post{
        always{
            echo 'Pipleline CP 1 done'
        }
    }
}