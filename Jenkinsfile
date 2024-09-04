pipeline {
    agent any

    tools {nodejs "node"}
    environment {
      CHROME_BIN = '/bin/google-chrome'
    }
    stages {
        stage('Depedencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run e2e:allTests'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
