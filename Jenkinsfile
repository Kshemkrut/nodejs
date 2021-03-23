pipeline {
    agent any

    stages{
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test'){
            steps{
                sh 'npm run test'
            }
        }
        stage('Build'){
            steps{
                sh 'npm run build'
            }
        }
        stage('Start'){
            steps{
                sh 'npm run start'
            }
        }
    }
}
